from flask import Flask, request, jsonify
from translation_utils import initialize_translation_model, translate_text

app = Flask(__name__)

# 번역 함수
def translate(input_text):
    model_dir = "./results4_1"
    tokenizer, model = initialize_translation_model(model_dir)
    translation = translate_text([input_text], tokenizer, model)
    return translation

@app.route('/translate', methods=['POST'])
def translate_endpoint():
    data = request.get_json()
    user_input = data.get('text')

    # 번역 로직
    translation = translate(user_input)

    return jsonify({'translated_text': translation})

if __name__ == '__main__':
    app.run(debug=True)
