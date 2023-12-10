import { Fragment, useState } from "react";
import style from "./HomePage.module.css";
import Quiz from "../../components/Quiz/Quiz";
import Game from "../../components/Game/Game";
import tree from "../../assets/grow__tree.mp4";
import bear from "../../assets/bear.jpg";
import gap from "../../assets/gap.png";
const HomePage = () => {
  const options = [
    {
      title: "1) Farhod Musajonning birinchi hikoyasi qaysi?",
      variants: [
        "A) Daradagi qishloqda",
        "B) Bahor nafasi",
        "C) Himmat",
        "D) Oftobni quvalab",
      ],
      correct: 0,
    },
    {
      title: `2) Farhod Musajonning ilk asari qachon yozilgan?`,
      variants: ["A) 1954", "B) 1955", "C) 1956", "D) 1957"],
      correct: 1,
    },
    {
      title: `3) Farhod Musajon hikoyasi berilgan qatorni toping?`,
      variants: [
        "A) Eng yaxshi chana",
        "B) Hadik",
        "C) Do'stlik",
        "D) Sayrang qushalar",
      ],
      correct: 0,
    },
    {
      title: `4) Farhod Musajonning qissalari berilgan qatorni toping?`,
      variants: [
        "A) Oq kabutar",
        "B) Shiqildoq",
        "C) Buloq suvi",
        "D) Najot istab",
      ],
      correct: 2,
    },
    {
      title:
        "5) Yozuvchining kattalarga bag'ishlangan asari qaysi qatorda keltirilgan?",
      variants: [
        "A) Bahor nafasi",
        "B) Buloq suvi",
        "C) Bo'sh kelma Aliqulov",
        "D) Sovg'a",
      ],
      correct: 0,
    },
    {
      title: "6) Latifjon yozuvchining qaysi hikoyasi qahramoni?",
      variants: [
        "A) Buloq suvi",
        "B) Eng yaxshi chana",
        "C) Bahor nafasi",
        "D) Hadik",
      ],
      correct: 1,
    },
    {
      title: `7) Glotok rodnikovoy vodi" kitobi nechanchi yil yozilgan?`,
      variants: ["A) 1987", "B) 1997", "C) 1984", "D) 1989"],
      correct: 0,
    },
    {
      title:
        "8) Yozuvchining bolalar uchun hikoyalar to'plami qaysi qatorda tog'ri keltirilgan?",
      variants: [
        "A) Tekin tomosha",
        "B) Hamlet",
        "C)Bog' ko'cha",
        "D) Buloq suvi",
      ],
      correct: 0,
    },
    {
      title: `9) Farhod Musajonning "Daradagi qishloq" hikoyasi qaysi jurnalda chop etilgan?`,
      variants: ["A) Sharq yulduzi", "B) Gulhan", "C) Yoshlik", "D) Yoshkuch"],
      correct: 0,
    },
    {
      title: "10) Yozuvchi nechanchi yil vafot etgan?",
      variants: ["A) 2013", "B) 2003", "C) 2014", "D) 2008"],
      correct: 0,
    },
  ];
  const [step, setStep] = useState(0);
  const question = options[step];
  const [correct, setCorrect] = useState(0);

  const myVideo = document.getElementById("move");
  function playPause() {
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  }
  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
      myVideo.play();
      setStep(step + 1);
      setTimeout(() => {
        myVideo.pause();
        if (step < options.length - 1) {
          setStep(step + 1);
        }
      }, 1300);
    } else {
      setStep(step + 1);
      if (step < options.length - 1) {
        setStep(step + 1);
      }
    }
  };

  console.log(playPause);
  return (
    <Fragment>
      <div className={style["main__wrapper"]}>
        <div className={style["basket__wrap"]}></div>
        <h2 className={style["name"]}>Diyora`s Project</h2>
        <img className={style["bear"]} src={bear} alt="bear" />
        <img className={style["gap"]} src={gap} alt="gap" />
        <p className={style["title"]}>
          Salom! Menga Daraxtni o`stirishda yordamingiz kerak! Savollarga
          to`g`ri javob bergan holda daraxtni o`stiring.
        </p>
        <video id="move" className={style["move"]} autoPlay src={tree}></video>
      </div>
      {step !== options.length ? (
        <Quiz
          options={options}
          question={question}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Game correct={correct} options={options} />
      )}
    </Fragment>
  );
};

export default HomePage;
