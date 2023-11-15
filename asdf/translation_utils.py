from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

def initialize_translation_model(model_dir):
    tokenizer = AutoTokenizer.from_pretrained(model_dir)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_dir)
    model.cpu()
    return tokenizer, model

def translate_text(input_text, tokenizer, model):
    inputs = tokenizer(input_text, return_tensors="pt", padding=True, max_length=38)
    koreans = model.generate(
        **inputs,
        max_length=38,
        num_beams=5,
    )
    translated_text = [tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(korean)) for korean in koreans]
    return translated_text[0]
