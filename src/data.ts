import { Project, Experience, SkillProgress } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-architecture',
    title: 'Aura Architecture',
    description: 'Redefining digital space for sustainable luxury architecture.',
    category: 'UI/UX',
    tag: 'UI/UX / WEB PLATFORM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx-NfJxkX56Ow7qnoV5vDKLxM0rRNlODkoa4WAREv0WHg9pF_xoliwPKWzfl4FaKDduXplM9a2FYgg3EIm3l91TkaQ52ZH9wBBNJbbCUt42EbjhVmbAjPgNLofyhn_8Ka6icSEWr9Qn5i3PK_pwjdNz5rE03zjhLwP7uEUbRuvEvW1kjcxpDcz73f0HhOoMxcd4UNDJz7xmUpEtXsoUpJqRlD-9GOwG_nYn-aXiUl_F7zznaMgv5pv_J7mA0UAXGYZNjbMjW8TUEbh',
    client: 'Aura Studio',
    year: '2024',
    role: 'Principal Design',
    featured: true
  },
  {
    id: 'lumina-gallery',
    title: 'Lumina Gallery',
    description: 'Interactive showcase celebrating contemporary architectural photography.',
    category: 'MOTION',
    tag: 'MOTION / WEB EXHIBIT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgDpr4QmfHwRG9tGDb0BZP_IGk-CI32Uic-ARiH6RsIVhKpPX4TwwNx7yjVYamPEt-rlONF8c-KyhMAE16kdyfu-TOAjT5HKKgiXu9e6_alTYSXvXs9qPlzRkU6OWfAhAMb4qPpuZt2YbdlPdlxNqD0UHWCPfgUES1kADi8sB9uvlqfdN2I3jOO2LHXWjkRcR58npu8FJy_cLB4LFyY8ZVQFTQsnx67OgJQtEVDrTNaWgTCtjeH6DBHJoKxBTk5cvm466lnF8CYYxY',
    client: 'Lumina Arts',
    year: '2023',
    role: 'Interaction Lead',
    featured: true
  },
  {
    id: 'aura-skincare',
    title: 'Aura Skincare',
    description: 'Organic formulations paired with minimalist identity.',
    category: 'BRANDING',
    tag: 'BRAND / PACKAGING',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHwny-UJB4zshXFc4GVwE7uYyXVhoBaqtqKdCvdWQjvrXaLbBmHKONLDcy-pbJHFLSyr3UN3SfzH9Jla_i81a4NURUezcwxpg6ML8MkCsOfoOCs-7hlLPeRgH3F8hSTjWmv5zPUzCjytlVAxCwgkRHWhriVYf6CPwUM_J0k88d88NZaW20CnJoaAEAaJ_5PikUXK1wvfwKxLZto4guourAqzSJ5d0H79Gvm2tjPqAYfC7zFv-UMcWXZPn1DAt4NhCNDRa0SyDR52f8',
    client: 'Aura Lab',
    year: '2024',
    role: 'Visual Design',
    featured: false
  },
  {
    id: 'nexus-finance',
    title: 'Nexus Finance',
    description: 'Wealth management simplified for the digital generation.',
    category: 'UI/UX',
    tag: 'MOBILE / FINTECH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy81GyssGRdLYEZWgZarSxKtqWrqAFZc5ve_s-fpDsd6zNw-rzEb4unvHqrS4i4ooO8SqGUrpnBxHzeRcpYWh1aBciebpyLDOmM232s730piEje9EByFQSvGSKmJwGWsa303AN6PKdGamEaxA_wOyk38AK4PzFBpXmm9j6uTNtGjfCzCyKZ6ps46rEchIT11lr506RY2W0uBxHT-ivMzn6Nzx6CcMD0GletQjEy-EdQUGYs5NH-oTQoNRDsKGtOZeb1_X1VcNUIeiF',
    client: 'Nexus Group',
    year: '2023',
    role: 'Product Lead',
    featured: false
  },
  {
    id: 'kinetic-flow',
    title: 'Kinetic Flow',
    description: 'Visual exploration of dynamic architectural states.',
    category: 'MOTION',
    tag: 'DIGITAL ARCHITECTURE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvhbrvF6H6N3OiN_hc8-gjrr0YrvLAReyAQmBpf1FjPH6nvwpHOjUbTy2y3uOkA39hiuionK0U42e3czw3ZsbFnYIabjck-4ekFILnHhzhp6n4RCJtTdvR57AYfvmceCVYPdwQl1TxnysaJf3y0N5pwILbLuKU9U5QRpYuf0cNynp0lER5Mf4daBG9c6nmEPX0hf9GcwcFS-dxW1tfwZ64BPzFLfpaOqm3k1qGXCLw1n1LvGq6i194ksz4ix-SN6cbTjnQQLmLVwtn',
    client: 'Vektor Lab',
    year: '2023',
    role: 'Creative Developer',
    featured: false
  },
  {
    id: 'lumina-arch',
    title: 'Lumina Arch',
    description: 'Digital exhibition spaces for structural installations.',
    category: 'UI/UX',
    tag: 'INTERACTION / WEB',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCafyniX5S7DLScsJiKjvg8IPaDMUTwGKPmdYwxeUZyxn__bFb1Oeb4mmNilBhZEIZpu5a0b-KZvR4aCFhuWKHsyTcr3ZKzHgXVTU4tvZuQUSpsANyNiOiWpD80mlSpz2_uubybNauIyHJc6rHic_8nGdKfuuQ27mqn3b4H0r7smUt_TyNwLJwbKuXJNFvusQiY4nkj7Rulm1k4Ytfw5HHyzUjPfLMwVvj0UKHmQH-_QcfAqa4wxyQfKoXc5oSxDakxK-w86O7xJzZ2',
    client: 'Lumina Inc',
    year: '2024',
    role: 'Interface Designer',
    featured: false
  },
  {
    id: 'vanguard-ed',
    title: 'Vanguard Ed',
    description: 'Learning platform designed for collaborative growth.',
    category: 'BRANDING',
    tag: 'IDENTITY / WEB',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0PBZh6wPipTwxcQaQpfp0C_YyQgQkSdhXHtIU1mVmBxFHUDtF6v6P_JqjyJPIlQ7K_Ind7eGBsCjXRHmHsYK2joOFPeNFadZuBFXIsXTSGK3w19FtOjx_JHfGQbne77U2bQrP8xjoptvAEvxr42Qo2insmuXwViyOV08luMB2sgJwVPID2TpU0i-fG4EgOg2RGZ-h8Egn25LdgXA7vaQbBx1aG5f9Cq1Omj362ZRpP7PA_ayuReAuCwIV8lTpKJ7KYPVG0orLf68e',
    client: 'Vanguard Institution',
    year: '2022',
    role: 'Lead Visual Designer',
    featured: false
  },
  {
    id: 'sonic-identity',
    title: 'Sonic Identity',
    description: 'Synthesizing audio and video in fluid harmony.',
    category: 'MOTION',
    tag: 'SOUND SCAPE / DESIGN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnZ4S3aZSmgtIYb-Rr4KX_LvBWRQHSDumgS1BfwuyaynamnveiuLufL69G_tyW_N9oogpsRUyGYyXCQWHSssknw_iLcbTajRTFX1II0lih0YF_SrY_zWUvbeRmimLWPQHe6eunIza2i32HlxUNIU-CR2qiNWSKW_DeLE6I6i9H4NNysqKvHuDYuAEMb7KTPdAuSF10-r9BjCeKGuL_OwERAlTpz6jjN9r3VXkyL6OjatG5xa_vqsh0ixlM7zCyrKF6SSIbEDT7S012',
    client: 'Sonic Lab',
    year: '2023',
    role: 'Creative Technologist',
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    period: '2022 — Present',
    role: 'Principal Product Designer',
    company: 'Studio Aura',
    description: 'Leading digital product definition, interactive exhibitions, and spatial UI installations for high-end architecture and hospitality clients.'
  },
  {
    id: 'exp2',
    period: '2018 — 2022',
    role: 'Senior Interaction Designer',
    company: 'Vektor Agency',
    description: 'Delivered comprehensive design systems, mobile banking platforms, and custom physics-based web interfaces.'
  },
  {
    id: 'exp3',
    period: '2015 — 2018',
    role: 'UI/UX Designer',
    company: 'Digital Craft',
    description: 'Engaged with emerging startups to define brand identities, visual style guidelines, and interactive experiences.'
  }
];

export const NIKHIL_SKILLS: SkillProgress[] = [
  { name: 'Frontend Engineering', percentage: 90 },
  { name: 'UI/UX Interaction Design', percentage: 80 },
  { name: 'Mobile App Development (Flutter)', percentage: 75 },
  { name: 'Cloud & System Architectures', percentage: 70 }
];

export const TECH_STACK = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'SQL', 'Dart', 'HTML / CSS'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Flutter', 'Express', 'TailwindCSS', 'Redux', 'Electron'],
  tools: ['Docker', 'Git', 'AWS', 'Google Cloud', 'Firebase', 'Vercel', 'Figma', 'Webpack']
};

export const PORTRAIT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6ufwoG0jfcgWodW_1fNo6DDl0S4R6mWSXn7bWLnSSgxG2fX8zsrOCTtAGoGOAprnqau3U_LTLGk5zb2-VjNbm9pLvmRLkLukjLz-MsC8u-ZwTUdDzgV7AIbOh1ioZPLcQT3kzHjPwQG4K9taiK7FDGDG2Z0_Vq5WDJYv_kDd2TtGYEDgTtND1p0zh8xFRyFJgGcfpsgA0dQalm-2hywzSrG99o_ABiKUkVHirZaTT5FGh0i8hTMFVzNWbs0PIWvjKUv_SeYp-9JE3';
