from fpdf import FPDF
from fpdf.enums import XPos, YPos
import os

class ResumePDF(FPDF):
    def header(self):
        pass

    def footer(self):
        # The user's resume does not have a footer/page number
        pass

def create_resume():
    # A4: 210mm x 297mm
    pdf = ResumePDF(orientation='P', unit='mm', format='A4')
    pdf.set_margins(18, 14, 18)
    pdf.set_auto_page_break(auto=False)
    pdf.add_page()

    # Load Windows Arial fonts for clean unicode support
    arial_regular = r'C:\Windows\Fonts\arial.ttf'
    arial_bold = r'C:\Windows\Fonts\arialbd.ttf'
    arial_italic = r'C:\Windows\Fonts\ariali.ttf'

    if os.path.exists(arial_regular) and os.path.exists(arial_bold):
        pdf.add_font('Arial', '', arial_regular)
        pdf.add_font('Arial', 'B', arial_bold)
        if os.path.exists(arial_italic):
            pdf.add_font('Arial', 'I', arial_italic)
        font_name = 'Arial'
    else:
        font_name = 'Helvetica'

    # Name
    pdf.set_font(font_name, 'B', 18)
    pdf.set_text_color(10, 10, 10)
    pdf.cell(0, 8, 'MAHITH P', align='C', new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # Contact line
    pdf.set_font(font_name, '', 8.5)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 4.5, '+91 6305853667 | p.mahith123@gmail.com | linkedin.com/in/p-mahith-845124358 | Andhra Pradesh, India', align='C', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2.5)

    def section_header(title):
        pdf.set_font(font_name, 'B', 9.5)
        pdf.set_text_color(0, 0, 0)
        pdf.cell(0, 4.5, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_draw_color(0, 0, 0)
        pdf.set_line_width(0.35)
        pdf.line(18, pdf.get_y(), 192, pdf.get_y())
        pdf.ln(1.8)

    # 1. PROFESSIONAL SUMMARY
    section_header('PROFESSIONAL SUMMARY')
    pdf.set_font(font_name, '', 8.5)
    pdf.set_text_color(20, 20, 20)
    summary = (
        'Motivated Computer Science undergraduate with a strong foundation in cybersecurity, programming, and problem-solving. '
        'Hands-on experience with security tools, vulnerability assessment, digital forensics, and cybersecurity internships. '
        'Seeking an opportunity to apply technical skills and contribute to real-world projects.'
    )
    pdf.multi_cell(174, 3.8, summary)
    pdf.ln(2.0)

    # 2. EDUCATION
    section_header('EDUCATION')
    # B.Tech
    pdf.set_font(font_name, 'B', 8.5)
    pdf.write(3.8, 'Bachelor of Technology (B.Tech) – Computer Science Engineering')
    pdf.set_font(font_name, '', 8.5)
    pdf.write(3.8, ' | The Apollo University, Chittoor | ')
    pdf.set_font(font_name, 'B', 8.5)
    pdf.write(3.8, '2025 – Present (2026)\n')
    
    # Intermediate
    pdf.set_font(font_name, 'B', 8.5)
    pdf.write(3.8, 'Intermediate (MPC)')
    pdf.set_font(font_name, '', 8.5)
    pdf.write(3.8, ' | Board of Intermediate Education, Andhra Pradesh | ')
    pdf.set_font(font_name, 'B', 8.5)
    pdf.write(3.8, '2024\n')
    pdf.ln(2.0)

    # 3. TECHNICAL SKILLS
    section_header('TECHNICAL SKILLS')
    skills = [
        ('Programming', 'C, Python, JavaScript'),
        ('Cybersecurity Tools', 'Kali Linux, Metasploit, Burp Suite, DVWA'),
        ('Core Concepts', 'Networking, Web Security, VAPT, SOC Basics'),
        ('Other', 'Vulnerability Assessment, Prompt Engineering, AI Fundamentals')
    ]
    for label, items in skills:
        pdf.set_font(font_name, 'B', 8.5)
        pdf.cell(38, 3.8, f'{label}: ', new_x=XPos.RIGHT, new_y=YPos.TOP)
        pdf.set_font(font_name, '', 8.5)
        pdf.cell(136, 3.8, items, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2.0)

    # 4. INTERNSHIP EXPERIENCE
    section_header('INTERNSHIP EXPERIENCE')
    exp = [
        (
            'Cybersecurity Intern – CyberwarLab',
            [
                'Assisted in vulnerability testing and security analysis',
                'Gained practical exposure to real-world cybersecurity tools'
            ]
        ),
        (
            'Cybersecurity / Digital Forensics Intern – Amroha Police | 2026',
            [
                'Gained practical exposure to digital forensics and cybersecurity investigation workflows',
                'Assisted with forensic analysis concepts, evidence handling, and investigation-oriented security practices'
            ]
        ),
        (
            'Cybersecurity Intern – TechnoHacks',
            [
                'Gained hands-on exposure to cybersecurity concepts and practical security tasks',
                'Worked with cybersecurity fundamentals and security-focused tools in a learning environment'
            ]
        )
    ]
    for role, bullets in exp:
        pdf.set_font(font_name, 'B', 8.5)
        pdf.cell(0, 3.8, role, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_font(font_name, '', 8.5)
        for b in bullets:
            pdf.set_x(18)
            pdf.cell(4, 3.6, '•', new_x=XPos.RIGHT, new_y=YPos.TOP)
            pdf.multi_cell(170, 3.6, b)
        pdf.ln(0.8)
    pdf.ln(1.2)

    # 5. PROJECTS
    section_header('PROJECTS')
    projects = [
        (
            'Cyber Crime Portal | Police Department',
            [
                'Created a cyber crime reporting and management portal for the police department',
                'Designed the portal to support reporting, tracking, and management of cyber crime-related cases',
                'Applied web development and cybersecurity concepts to build a practical law-enforcement-oriented solution'
            ]
        ),
        (
            'Web & Network Vulnerability Testing',
            [
                'Performed security testing in controlled environments',
                'Identified common vulnerabilities and understood mitigation techniques'
            ]
        )
    ]
    for p_title, p_bullets in projects:
        pdf.set_font(font_name, 'B', 8.5)
        pdf.cell(0, 3.8, p_title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_font(font_name, '', 8.5)
        for b in p_bullets:
            pdf.set_x(18)
            pdf.cell(4, 3.6, '•', new_x=XPos.RIGHT, new_y=YPos.TOP)
            pdf.multi_cell(170, 3.6, b)
        pdf.ln(0.8)
    pdf.ln(1.2)

    # 6. CERTIFICATIONS
    section_header('CERTIFICATIONS')
    certs = [
        'Cybersecurity Analyst Job Simulation – Tata (via Forage)',
        'Practical Security Fundamentals – TCM Security',
        'Master in Prompt Engineering and AI',
        'Digital Forensics & Incident Investigation',
        'ISO/IEC 27001:2022 Information Security Associate',
        'Certified CSCSO',
        'Cryptography and Network Security – NESCO Academy'
    ]
    pdf.set_font(font_name, '', 8.5)
    for c in certs:
        pdf.set_x(18)
        pdf.cell(4, 3.6, '•', new_x=XPos.RIGHT, new_y=YPos.TOP)
        pdf.cell(170, 3.6, c, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2.0)

    # 7. CORE COMPETENCIES
    section_header('CORE COMPETENCIES')
    pdf.set_font(font_name, '', 8.5)
    pdf.cell(0, 3.8, 'Problem Solving • Analytical Thinking • Communication Skills • Time Management • Adaptability', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2.0)

    # 8. ADDITIONAL INFORMATION
    section_header('ADDITIONAL INFORMATION')
    extra = [
        'Strong interest in Cybersecurity and Ethical Hacking',
        'Actively learning new technologies and tools',
        'Passionate about Video Editing and Content Creation'
    ]
    pdf.set_font(font_name, '', 8.5)
    for e in extra:
        pdf.set_x(18)
        pdf.cell(4, 3.6, '•', new_x=XPos.RIGHT, new_y=YPos.TOP)
        pdf.cell(170, 3.6, e, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    output_path = 'public/Mahith_P_Resume.pdf'
    pdf.output(output_path)
    print(f'SUCCESS: {output_path} generated. Page count: {pdf.page_no()}, Y position: {pdf.get_y():.2f} mm')

if __name__ == '__main__':
    create_resume()
