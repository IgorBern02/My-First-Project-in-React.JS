import background_1 from "../image/background.jpg";
import background_2 from "../image/background_2.jpg";
import background_3 from "../image/background_3.jpg";
import background_4 from "../image/background_4.jpg";

function MenuBackground() {
  function background1() {
    document.querySelector(".Body").style.background =
      "url('../image/background.jpg') center center / cover";
  }

  function background2() {
    document.querySelector(".Body").style.background =
      "url('../image/background_2.jpg') center center / cover";
  }

  function background3() {
    document.querySelector(".Body").style.background =
      "url('../image/background_3.jpg') center center / cover";
  }

  function background4() {
    document.querySelector(".Body").style.background =
      "url('../image/background_4.jpg') center center / cover";
  }

  return (
    <div className="Menu">
      <div className="bg bg_1" onClick={background1}>
        <img src={background_1} alt="" />
      </div>
      <div className="bg bg_2" onClick={background2}>
        <img src={background_2} alt="" />
      </div>
      <div className="bg bg_3" onClick={background3}>
        <img src={background_3} alt="" />
      </div>
      <div className="bg bg_4" onClick={background4}>
        <img src={background_4} alt="" />
      </div>
    </div>
  );
}

export default MenuBackground;
