export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  const defaultStats = {
    success: true,
    public_repos: 14,
    followers: 2,
    latest_repo: 'resume-analyser',
    latest_repo_desc: 'AI-Powered Resume Builder & ATS Analyzer',
    latest_pushed_at: new Date().toISOString(),
    status: 'online',
  };

  try {
    const ghHeaders = {
      'User-Agent': 'Mahith-Portfolio-Security-Worker/1.0',
      Accept: 'application/vnd.github.v3+json',
    };

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/p-mahith', { headers: ghHeaders }),
      fetch('https://api.github.com/users/p-mahith/repos?sort=pushed&per_page=1', {
        headers: ghHeaders,
      }),
    ]);

    if (userRes.ok) {
      const userData = await userRes.json();
      const reposData = reposRes.ok ? await reposRes.json() : [];
      const latest = Array.isArray(reposData) && reposData.length > 0 ? reposData[0] : null;

      const statsPayload = {
        success: true,
        public_repos: userData.public_repos || defaultStats.public_repos,
        followers: userData.followers || defaultStats.followers,
        latest_repo: latest ? latest.name : defaultStats.latest_repo,
        latest_repo_desc: latest?.description || defaultStats.latest_repo_desc,
        latest_pushed_at: latest?.pushed_at || userData.updated_at || defaultStats.latest_pushed_at,
        status: 'online',
      };

      return new Response(JSON.stringify(statsPayload), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=1800, s-maxage=1800',
        },
      });
    }

    return new Response(JSON.stringify(defaultStats), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=600',
      },
    });
  } catch {
    return new Response(JSON.stringify(defaultStats), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
