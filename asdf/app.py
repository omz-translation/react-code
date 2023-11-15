from flask import Flask, request, jsonify
from translation_utils import initialize_translation_model, translate_text
app = Flask(__name__)

# Initialize the translation model
model_dir = "./results4_1"
tokenizer, model = initialize_translation_model(model_dir)

@app.route('/api/translate', methods=['POST'])
def translate_endpoint():
    data = request.get_json()
    user_input = data.get('text')

    # Translate the input text
    translation = translate_text(user_input, tokenizer, model)

    return jsonify({'translated_text': translation})

if __name__ == '__main__':
    app.run(debug=True)