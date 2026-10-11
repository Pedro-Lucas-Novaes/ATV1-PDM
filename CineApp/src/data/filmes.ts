import type { ImageSourcePropType } from "react-native";

export type Filme = {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  imagem: ImageSourcePropType;
  sinopse: string;
};

export const filmes: Filme[] = [
  {
    id: "1",
    titulo: "Interestelar",
    genero: "Ficção científica",
    ano: 2014,
    imagem: require("../../assets/images/interestelar.jpg"),
    sinopse:
      "Um grupo de astronautas viaja pelo espaço em busca de um novo lar para a humanidade.",
  },
  {
    id: "2",
    titulo: "A Origem",
    genero: "Ficção científica",
    ano: 2010,
    imagem: require("../../assets/images/inception.jpg"),
    sinopse:
      "Um especialista em invadir sonhos recebe a missão de plantar uma ideia na mente de uma pessoa.",
  },
  {
    id: "3",
    titulo: "Matrix",
    genero: "Ação",
    ano: 1999,
    imagem: require("../../assets/images/matrix.jpg"),
    sinopse:
      "Um programador descobre que a realidade em que vive é uma simulação controlada por máquinas.",
  },
  {
    id: "4",
    titulo: "Avatar",
    genero: "Aventura",
    ano: 2009,
    imagem: require("../../assets/images/avatar.jpg"),
    sinopse:
      "Um ex-fuzileiro chega a Pandora e passa a conhecer a cultura e a natureza do povo Na'vi.",
  },
  {
    id: "5",
    titulo: "Toy Story",
    genero: "Animação",
    ano: 1995,
    imagem: require("../../assets/images/toy-story.jpg"),
    sinopse:
      "Os brinquedos de Andy ganham vida quando estão sozinhos. A chegada de Buzz muda a rotina de Woody.",
  },
  {
    id: "6",
    titulo: "O Rei Leão",
    genero: "Animação",
    ano: 1994,
    imagem: require("../../assets/images/rei-leao.jpg"),
    sinopse:
      "O jovem leão Simba precisa enfrentar seu passado e descobrir seu papel no reino.",
  },
];
