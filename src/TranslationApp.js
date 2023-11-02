import React, { useState, useEffect } from 'react';

function TranslationApp() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    // 번역 요청을 보내는 함수
    const translateText = async () => {
      try {
        const response = await fetch('YOUR_TRANSLATION_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            target_language: 'ko', // 번역 대상 언어 설정
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setTranslation(data.translation);
        } else {
          // 오류 처리
          console.error('Translation error:', response.status);
        }
      } catch (error) {
        console.error('Translation error:', error);
      }
    };

    // text 상태가 변경될 때마다 번역 요청을 보내도록 설정
    if (text) {
      translateText();
    }
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <h3>Translation:</h3>
        <p>{translation}</p>
      </div>
    </div>
  );
}

export default TranslationApp;
