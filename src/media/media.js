import media1 from "../assets/img/morphis-question-abstract-illustration.png";
import media2 from "../assets/img/morphis-smartphone-settings-and-options.png";
import media3 from "../assets/img/Lập trình ứng dụng.gif";

export const media = [media1, media2, media3];
export const mediaByIndex = (index) => media[index % media.length];
