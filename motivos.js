const motivos = [
  { img: 'img/1.jpg', titulo: '1. Você ilumina meu coração', descricao: 'Sem você é como se o mundo não tivesse cor' },
  { img: 'img/2.jpg', titulo: '2. ZEZÉ', descricao: 'Nós temos um filho juntos. Seja Responsável.' },
  { img: 'img/3.jpg', titulo: '3. Minha mãe te ama', descricao: 'E ainda faz uma comida que você ama.' },
  { img: 'img/4.jpg', titulo: '4. Eles te amam', descricao: 'Basta falar um "Cadê a Maria?" pra essas pecinhas correrem igual doidos pro meu quarto' },
  { img: 'img/5.jpg', titulo: '5. Nos divertimos muito juntos', descricao: 'Você é minha companhia favorita pra toda hora. Shows, restaurantes, jogos online. Tudo!' },
  { img: 'img/6.jpg', titulo: '6. Gosto musical', descricao: '97% Compatível. Não se acha isso em qualquer lugar. nóis é mema fita veinha' },
  { img: 'img/7.jpg', titulo: '7. Não sou mão de vaca', descricao: 'Parceladinho eu compro até a lua pra minha princesa!' },
  { img: 'img/8.jpg', titulo: '8. Te respeito acima de tudo', descricao: 'Ou é do jeito que minha pequena quer ou não é!' },
  { img: 'img/9.jpg', titulo: '9. Nóis chapa', descricao: 'só brincadeira e bobajada' },
  { img: 'img/10.jpg', titulo: '10. Somos lindos juntos', descricao: 'Sério. O casal mais lindo da história.' },
  { img: 'img/11.jpg', titulo: '11. Quero construir mais memórias contigo', descricao: 'Muito mais!' },
  { img: 'img/12.jpg', titulo: '12. Tiro fotos bonitas', descricao: 'pro seu feed ficar ainda mais bonito pequena <3' },
  { img: 'img/13.jpg', titulo: '13. Te acho a mulher mais linda do mundo', descricao: 'e faço questão que o mundo todo saiba que penso assim' },
  { img: 'img/14.jpg', titulo: '14. Somos chave', descricao: 'direto da pfw pras favelas paulistanas' },
  { img: 'img/15.jpg', titulo: '15. Quero te fazer feliz todos os dias', descricao: 'Sinto falta de acordar ao seu lado e te encher de beijo logo cedo' },
  { img: 'img/16.jpg', titulo: '16. Amo te fazer rir', descricao: 'e sou bom nisso, né?' },
  { img: 'img/17.jpg', titulo: '17. Deixo você fazer o que quiser com meu corpo', descricao: 'as veiz machuca' },
  { img: 'img/18.jpg', titulo: '18. Amo seus beijos', descricao: 'bom demais me sinto no céu' },
  { img: 'img/19.jpg', titulo: '19. O Que É Seu Ninguém Te Tira', descricao: 'e eu sou 100% seu. tenho certeza disso' },
  { img: 'img/20.jpg', titulo: '20. Eu amo sua família', descricao: 'e a dorinha me ama'},
  { img: 'img/21.jpg', titulo: '21. Sou seu amigo', descricao: 'nóis é mema fita²' },
  { img: 'img/22.jpg', titulo: '22. Você é minha inspiração', descricao: 'Muita coisa! é o principal motivo pelo qual quero ser uma pessoa cada vez melhor' },
  { img: 'img/23.jpg', titulo: '23. Aprecio sua autenticidade', descricao: 'Vejo arte em tudo que você faz' },
  { img: 'img/24.jpg', titulo: '24. Você é toda linha, minha querida', descricao: 'e em você não há defeito algum.' },
  { img: 'img/25.jpg', titulo: '25. Quero estar ao seu lado em tudo', descricao: 'Você é minha parceira de copo favorita' },
  { img: 'img/26.jpg', titulo: '26. Gosto de cuidar de você', descricao: 'e quero fazer isso pro resto da minha vida' },
  { img: 'img/27.jpg', titulo: '27. Nos damos bem na cama', descricao: 'sem legenda' },
  { img: 'img/28.jpg', titulo: '28. Amo fazer pão pra você', descricao: 'e vou virar um ótimo cozinheiro pra fazer ainda mais coisas' },
  { img: 'img/29.jpg', titulo: '29. Quero ouvir sua voz sempre', descricao: 'e quero que você se sinta ouvida' },
  { img: 'img/30.jpg', titulo: '30. Respeito seu espaço', descricao: 'nem sempre, desculpa' },
  { img: 'img/31.jpg', titulo: '31. Sou fiel aos nossos momentos', descricao: 'eles vivem sem pagar aluguel na minha cabeça' },
  { img: 'img/32.jpg', titulo: '32. Quero viajar o mundo contigo', descricao: 'desfilar pelo planeta com você é meu maior sonho' },
  { img: 'img/33.jpg', titulo: '33. Falo sobre você com Deus', descricao: 'e não é pouco. Peço pra Ele te guardar e te ajudar conquistar todos seus objetivos.' },
  { img: 'img/34.jpg', titulo: '34. Me dou bem com sua mãe', descricao: 'na medida do possível' },
  { img: 'img/35.jpg', titulo: '35. Assumo meus erros', descricao: 'e nunca vou cansar de me desculpar por eles, pois você é o meu maior acerto' },
  { img: 'img/36.jpg', titulo: '36. Eu te amo', descricao: 'mais do que ontem, menos do que amanhã' },
  { img: 'img/37.jpg', titulo: '37. Quero dividir a vida contigo', descricao: 'cada segundo dela' },
  { img: 'img/38.jpg', titulo: '38. Você não liga de eu ser pobre favelado', descricao: 'e nós vamos conquistar tudo juntos 💝' },
  { img: 'img/39.jpg', titulo: '39. Quero aprender a te amar', descricao: 'do jeito que você gostaria de ser amada, vou ser a minha melhor versão possível para você e pra nossa família' },
  { img: 'img/40.jpg', titulo: '40. Sou seu maior fã', descricao: 'não tenha dúvidas disso. sou #malulover' },
  { img: 'img/41.jpg', titulo: '41. Vou ser seu piloto', descricao: 'conte comigo pra te levar e te buscar aonde você quiser (em breve)' },
  { img: 'img/42.jpg', titulo: '42. Sou sortudo', descricao: 'bom de se ter por perto' },
  { img: 'img/43.jpg', titulo: '43. Você é minha prioridade', descricao: 'e sempre vai ser.' },
  { img: 'img/44.jpg', titulo: '44. Quero construir um futuro ao seu lado', descricao: 'e te ajudar a conquistar todos seus objetivos' },
  { img: 'img/45.jpg', titulo: '45. Vou te dedicar lindas músicas', descricao: 'e escrever as mais lindas legendas de foto que você vai ver na sua vida' },
  { img: 'img/46.jpg', titulo: '46. Já falei que eu te amo?', descricao: 'é que eu te amo mtoooo' },
  { img: 'img/47.jpg', titulo: '47. Você é meu tudo', descricao: 'você é a estrela dos meus sonhos, a musa da minha galeria e a modelo que desfila na passarela da minha mente o dia todo' },
];
