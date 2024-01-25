  # MZ 번역기 모델
  일반 기계번역기와 다르게 대한민국의 MZ 신조어 언어도 번역이 가능하게 하도록 제작하는 것을 목표
  하지만 만들 수 있는 MZ 코퍼스 양이 적어 학습된 모델에 transfer training 방식을 이용하여 효과적으로 학습
  학습된 모델을 만들기 위해 pre-trained model을 fine-tuning시켜 일반 번역기를 제작 후 제작한 MZ 코퍼스를 이용해 transfer training시켜 MZ번역기 모델을 제작
  
  # pre-trained model
  KETI-AIR/ke-t5-base 모델 사용
  ><https://github.com/AIRC-KETI/ke-t5>
  KE-T5: Korean-English
  KE-T5는 Text-to-Text Transfer Transformer 모델을 한국어와 영어 코퍼스를 이용하여 사전학습한 모델입니다.
  Vocabulary는 64,000개의 sub-word token으로 이루어져 있으며, Google의 sentencepiece를 이용하여 만들었습니다. Sentencepiece 모델은 한국어와 영어가 약 7:3의 비율로 섞인 30GB의 코퍼스를 99.95% 커버하도록 학습되었습니다.
  자세한 내용의 위 원본 링크를 통해 확인해주세요

  # 학습 dataset
  평문 코퍼스
  <https://huggingface.co/datasets/bongsoo/news_talk_en_ko>

  fine-tuning을 위한 데이터셋은 130만개의 한영코퍼스로 이루어진 위 데이터를 사용했습니다.
  신조어 코퍼스
인터넷, sns 크롤링을 통해 400개의 MZ단어를 모아 MZ사전을 제작
  MZ사전을 이용해 4000개의 신조어 예문을 만들어 학습에 이용할 코퍼스 제작

  
  
