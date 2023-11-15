import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame111.module.css";
import * as XLSX from "xlsx";

const ITEMS_PER_PAGE = 1;

const Frame111 = () => {
  const navigate = useNavigate();
  const [wordData, setWordData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Modified_MZ_Words.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const columnNames = jsonData[0];
        jsonData.shift();

        const transformedData = jsonData.map((row) => {
          const wordObject = {};
          columnNames.forEach((column, index) => {
            wordObject[column] = row[index];
          });
          return wordObject;
        });

        setWordData(transformedData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  const onPageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  const onRegisButtonContainerClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onMZTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMZText3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const word = wordData[startIndex];
  
  const handleSearch = () => {
    const results = wordData.filter((row) => {
      return (
        row["한글 단어"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        row["영어 단어"].toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    if (results.length > 0) {
      const resultIndex = wordData.indexOf(results[0]);
      const newPage = Math.ceil((resultIndex + 1) / ITEMS_PER_PAGE);
      setCurrentPage(newPage);
    }

    setSearchTerm(""); // 검색 후 검색어를 초기화하려면 이 줄을 추가합니다.
  };

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.regisButton} onClick={onRegisButtonContainerClick}>
        <div className={styles.regisButtonChild} />
        <div className={styles.mz}>MZ 신조어 등록</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div1}>{word && word["영어 단어"]}</div>
          <div className={styles.groupWrapper}>
            <div className={styles.wrapper}>
              <div className={styles.div2}>
                <p className={styles.p}>{word && word["한글 뜻"]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <p className={styles.p}>{word && word["영어 뜻"]}</p>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.div4}>
            {/* You can add content here if needed */}
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          disabled={endIndex >= wordData.length}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameGroup}>
          <div className={styles.groupItem} />
          <div className={styles.div6}>단어의 의미</div>
          <div className={styles.groupDiv}>
            <b className={styles.b}>1)</b>
          </div>
          <div className={styles.wrapper1}>
            <div className={styles.b}>
              {word && word["한글 뜻"]}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <img
          className={styles.volumeNoticeIcon}
          alt=""
          src="/volumenotice3.svg"
        />
        <div className={styles.div8}>{word && word["영어 단어"]}</div>
        <div className={styles.div9}>{word && word["한글 단어"]}</div>
      </div>
      <div className={styles.text}>{` `}</div>
      <div className={styles.searchbar}>
        <div className={styles.groupChild} />
        <textarea
          className={styles.search}
          placeholder="Search"
          id="search_"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          className={styles.searchbuttonIcon}
          alt=""
          src="/group-31.svg"
          onClick={handleSearch}
        />
      </div>
      <b className={styles.b1}>이채린 폼 미쳤다</b>
      <div className={styles.div10}>1</div>
      <img className={styles.photoIcon} alt="" src="/avatar1@2x.png" />
      <div className={styles.mz1} onClick={onMZTextClick}>
        MZ
      </div>
      <div className={styles.curPage} />
      <div className={styles.mz2} onClick={onMZText1Click}>
        MZ 번역기
      </div>
      <div className={styles.mz3}>MZ 사전</div>
      <div className={styles.mz4} onClick={onMZText3Click}>
        MZ 커뮤니티
      </div>
      <div className={styles.div11}>도움말</div>
    </div>
  );
};

export default Frame111;
