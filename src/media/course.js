import media1 from "../assets/img/3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png";
import media2 from "../assets/img/3d-casual-life-young-man-with-laptop-computer-working-at-home-office.png";
import media3 from "../assets/img/morphis-smartphone-settings-and-options.png";
import media4 from "../assets/img/nah.gif";
import media5 from "../assets/img/Phân tích, tk hệ thống.gif";
import media6 from "../assets/welcome.png";

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByCourse = (course) => media[course % media.length];
