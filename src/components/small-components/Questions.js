import React  from "react";
import {Link} from "react-router-dom";


// import "../componentsCSS/Questions.css";

function Questions(props) {
  const questions = "Article 51 of Indian Constitution";
  const answer =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quidem ipsam impedit similique a doloribus delectus eligendi laborum unde. Voluptatum unde, expedita optio nostrum voluptate non nisi maxime aliquid eligendi facilis at id exercitationem, ipsam, obcaecati doloribus incidunt mollitia.";
  return (
    <>
      <Link className="border-black border w-full h-24rem ">
        <div className="font-bold text-3xl">{props.questions}</div>
        <div className="text-2xl my-3">{props.answer.slice(0,200)}...</div>
      </Link>
    </>
  );
}

export default Questions;

Questions.defaultProps = {
  questions: "Article 51 of Indian Constitution",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti quidem ipsam impedit similique a doloribus delectus eligendi laborum unde. Voluptatum unde, expedita optio nostrum voluptate non nisi maxime aliquid eligendi facilis at id exercitationem, ipsam, obcaecati doloribus incidunt mollitia.",
};
