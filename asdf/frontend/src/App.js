import React, { useEffect, useState } from "react";
import { Routes,Route,useNavigationType,useLocation } from "react-router-dom";
import Frame12 from "./pages/Frame12";
import Frame10 from "./pages/Frame10";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame11 from "./pages/Frame11";
import Frame21 from "./pages/Frame21";
import Frame31 from "./pages/Frame31";
import QA1 from "./pages/QA1";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import Sns from "./pages/Sns";
import Frame111 from "./pages/Frame111";
import QA from "./pages/QA";
import Frame7 from "./pages/Frame7";

function App() {
  const [translation, setTranslation] = useState("");
  const [inputText, setInputText] = useState("");

  const handleTranslate = async () => {
    try {
      // 서버로 번역 요청을 보내는 코드
      // 서버 측에서 번역 기능이 구현되어 있어야 합니다.
      // 아래 예시는 서버로 POST 요청을 보내는 방식을 보여줍니다.
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setTranslation(data.translation);
    } catch (error) {
      console.error("번역 오류:", error);
    }
  };

  return (
      <Routes>
      <Route path="/" element={<Frame12 />} />
      <Route path="/20" element={<Frame10 />} />
      <Route path="/5" element={<Frame />} />
      <Route path="/4" element={<Frame1 />} />
      <Route path="/3" element={<Frame2 />} />
      <Route path="/9" element={<Frame3 />} />
      <Route path="/10" element={<Frame11 />} />
      <Route path="/11" element={<Frame21 />} />
      <Route path="/31" element={<Frame31 />} />
      <Route path="/qa" element={<QA1 />} />
      <Route path="/my" element={<Frame4 />} />
      <Route path="/6" element={<Frame5 />} />
      <Route path="/8" element={<Frame6 />} />
      <Route path="/7" element={<Frame8 />} />
      <Route path="/2" element={<Frame9 />} />
      <Route path="/sns" element={<Sns />} />
      <Route path="/1" element={<Frame111 />} />
      <Route path="/qa1" element={<QA />} />
      <Route path="/12" element={<Frame7 />} />
      </Routes>
  );
}

export default App;
