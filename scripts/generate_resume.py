from fpdf import FPDF
from fpdf.enums import XPos, YPos

class ResumePDF(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-12)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(130, 130, 130)
        self.cell(0, 10, f'Mahith P - Cybersecurity & Computer Science - Page {self.page_no()}', 0, 0, 'C')

def create_resume():
    pdf = ResumePDF(orientation='P', unit='mm', format='A4')
    pdf.set_margins(16, 12, 16)
    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.add_page()

    # Name
    pdf.set_font('Helvetica', 'B', 18)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 8, 'MAHITH P', align='C', new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # Sub-header contact info
    pdf.set_font('Helvetica', '', 8.5)
    pdf.set_text_color(71, 85, 105)
    contact_text = '+91 6305853667   |   p.mahith123@gmail.com   |   linkedin.com/in/p-mahith-845124358   |   Andhra Pradesh, India'
    pdf.cell(0, 5, contact_text, align='C', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2)

    def section_header(title):
        pdf.set_font('Helvetica', 'B', 9.5)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(0, 4.5, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_draw_color(203, 213, 225)
        pdf.set_line_width(0.3)
        pdf.line(16, pdf.get_y(), 194, pdf.get_y())
        pdf.ln(1.5)

    # 1. PROFESSIONAL SUMMARY
    section_header('PROFESSIONAL SUMMARY')
    pdf.set_font('Helvetica', '', 8.5)
    pdf.set_text_color(51, 65, 85)
    summary = (
        'Motivated Computer Science undergraduate with a strong foundation in cybersecurity, programming, '
        'and problem-solving. Hands-on experience with security tools, vulnerability assessment, digital forensics, '
        'and cybersecurity internships. Seeking an opportunity to apply technical skills and contribute to real-world projects.'
    )
    pdf.multi_cell(178, 4.0, summary)
    pdf.ln(1.5)

    # 2. EDUCATION
    section_header('EDUCATION')
    pdf.set_font('Helvetica', 'B', 8.5)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(135, 4.0, 'Bachelor of Technology (B.Tech) - Computer Science Engineering', new_x=XPos.RIGHT, new_y=YPos.TOP)
    pdf.set_font('Helvetica', '', 8.5)
    pdf.set_text_color(71, 85, 105)
    pdf.cell(43, 4.0, '2025 - Present (2026)', align='R', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_font('Helvetica', 'I', 8)
    pdf.cell(178, 3.8, 'The Apollo University, Chittoor', new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font('Helvetica', 'B', 8.5)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(135, 4.0, 'Intermediate (MPC) - Board of Intermediate Education, Andhra Pradesh', new_x=XPos.RIGHT, new_y=YPos.TOP)
    pdf.set_font('Helvetica', '', 8.5)
    pdf.set_text_color(71, 85, 105)
    pdf.cell(43, 4.0, '2024', align='R', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1.5)

    # 3. TECHNICAL SKILLS
    section_header('TECHNICAL SKILLS')
    skills = [
        ('Programming', 'C, Python, JavaScript'),
        ('Cybersecurity Tools', 'Kali Linux, Metasploit, Burp Suite, DVWA, Wireshark, Nmap'),
        ('Core Concepts', 'Networking (TCP/IP), Web Security, VAPT, SOC Basics, Threat Mitigation'),
        ('Other Areas', 'Vulnerability Assessment, Prompt Engineering, AI Fundamentals, Chain of Custody')
    ]
    for cat, items in skills:
        pdf.set_font('Helvetica', 'B', 8.5)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(36, 4.0, f'{cat}:', new_x=XPos.RIGHT, new_y=YPos.TOP)
        pdf.set_font('Helvetica', '', 8.5)
        pdf.set_text_color(51, 65, 85)
        pdf.cell(142, 4.0, items, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1.5)

    # 4. INTERNSHIP EXPERIENCE
    section_header('INTERNSHIP EXPERIENCE')
    exp = [
        (
            'Cybersecurity Intern - CyberwarLab',
            '',
            [
                'Assisted in vulnerability testing and security analysis across web applications.',
                'Gained practical exposure to real-world cybersecurity tools and testing methodologies.'
            ]
        ),
        (
            'Cybersecurity / Digital Forensics Intern - Amroha Police',
            '2026',
            [
                'Gained practical exposure to digital forensics and cybersecurity investigation workflows.',
                'Assisted with forensic analysis concepts, evidence handling, and investigation-oriented security practices adhering to strict chain of custody.'
            ]
        ),
        (
            'Cybersecurity Intern - TechnoHacks',
            '',
            [
                'Gained hands-on exposure to cybersecurity concepts and practical offensive/defensive security tasks.',
                'Worked with cybersecurity fundamentals and security-focused tools in an active learning environment.'
            ]
        )
    ]
    for title, yr, points in exp:
        pdf.set_font('Helvetica', 'B', 8.5)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(140, 4.0, title, new_x=XPos.RIGHT, new_y=YPos.TOP)
        pdf.set_font('Helvetica', '', 8.5)
        pdf.set_text_color(71, 85, 105)
        pdf.cell(38, 4.0, yr, align='R', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        for pt in points:
            pdf.set_font('Helvetica', '', 8.2)
            pdf.set_text_color(51, 65, 85)
            pdf.multi_cell(178, 3.6, f'- {pt}')
        pdf.ln(0.8)
    pdf.ln(1.0)

    # 5. PROJECTS
    section_header('PROJECTS')
    projects = [
        (
            'Cyber Crime Portal | Police Department',
            [
                'Created a centralized cyber crime reporting and management portal for the police department.',
                'Designed the portal to support incident intake, case tracking, and management of cyber crime-related evidence.',
                'Applied web development and cybersecurity concepts to build a practical law-enforcement-oriented solution.'
            ]
        ),
        (
            'Web & Network Vulnerability Testing',
            [
                'Performed rigorous security testing in controlled laboratory environments (DVWA, Burp Suite, Kali Linux).',
                'Identified common web flaws (OWASP Top 10) and formulated concrete technical mitigation blueprints.'
            ]
        )
    ]
    for title, points in projects:
        pdf.set_font('Helvetica', 'B', 8.5)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(178, 4.0, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        for pt in points:
            pdf.set_font('Helvetica', '', 8.2)
            pdf.set_text_color(51, 65, 85)
            pdf.multi_cell(178, 3.6, f'- {pt}')
        pdf.ln(0.8)
    pdf.ln(1.0)

    # 6. CERTIFICATIONS
    section_header('CERTIFICATIONS')
    certs = [
        'Cybersecurity Analyst Job Simulation - Tata (via Forage)',
        'Practical Security Fundamentals - TCM Security',
        'Master in Prompt Engineering and AI',
        'Digital Forensics & Incident Investigation',
        'ISO/IEC 27001:2022 Information Security Associate',
        'Certified CSCSO',
        'Cryptography and Network Security - NESCO Academy'
    ]
    for c in certs:
        pdf.set_font('Helvetica', '', 8.2)
        pdf.set_text_color(51, 65, 85)
        pdf.cell(178, 3.5, f'- {c}', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1.5)

    # 7. CORE COMPETENCIES & INTERESTS
    section_header('CORE COMPETENCIES & INTERESTS')
    pdf.set_font('Helvetica', 'B', 8.5)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(32, 3.8, 'Competencies:', new_x=XPos.RIGHT, new_y=YPos.TOP)
    pdf.set_font('Helvetica', '', 8.2)
    pdf.set_text_color(51, 65, 85)
    pdf.cell(146, 3.8, 'Problem Solving  *  Analytical Thinking  *  Communication  *  Time Management  *  Adaptability', new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font('Helvetica', 'B', 8.5)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(32, 3.8, 'Interests:', new_x=XPos.RIGHT, new_y=YPos.TOP)
    pdf.set_font('Helvetica', '', 8.2)
    pdf.set_text_color(51, 65, 85)
    pdf.cell(146, 3.8, 'Cybersecurity & Ethical Hacking  *  Emerging Security Tools  *  Video Editing & Content Creation', new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.output('public/Mahith_P_Resume.pdf')
    print('SUCCESS: public/Mahith_P_Resume.pdf created')

if __name__ == '__main__':
    create_resume()
