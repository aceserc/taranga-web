export type WelcomeMessage = {
  image: string;
  name: string;
  post: string;
  message: string;
};

export const WELCOME_MESSAGES: WelcomeMessage[] = [
  {
    image: "/assets/images/avatars/kaji-ram.png",
    name: "Kaji Ram Karki , IOE Purwanchal Campus",
    post: "Chief",
    message:
      "I am delighted to welcome you all to TechFest 7.0, organized by the Association of Computer Engineering Students (ACES). This event reflects the creativity and technical expertise of our students, offering a unique platform to explore emerging technologies, engage in competitions, and gain hands-on experience. I commend ACES for their dedication to fostering innovation, and I am confident TechFest 7.0 will inspire and empower all participants.",
  },
  {
    image: "/assets/images/avatars/prabin.png",
    name: "Pravin Sangroula, Department of Electronics and Computer Engineering",
    post: "HOD",
    message:
      "It gives me great pleasure to welcome you all to TechFest 7.0, organized by the Association of Computer Engineering Students (ACES). This event is a testament to the dedication and passion of our students in the Electronics and Computer Engineering Department. ACES has always been at the forefront of fostering a culture of innovation and technical excellence, and through TechFest 7.0, they continue to demonstrate their commitment to nurturing the next generation of engineers. This festival brings together innovation, creativity, and technical expertise, providing a platform for participants to explore emerging technologies, compete in exciting challenges, and gain hands-on experience through various workshops.",
  },
];
