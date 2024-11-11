function search_json(input_text, json_file) {

    if (input_text === "undefined") {
        return json_file
    } else {
        return json_file.filter((parametr) => {
            const text = Object.values(parametr)
                .filter(value => typeof value === 'string')
                .join(' '); // Combine all string values into a single string

            // Consider using a more robust text search library for Persian text, such as a library that supports stemming and tokenization.
            const regex = new RegExp(input_text, 'u'); // Remove word boundary checks for Persian text
            return regex.test(text);
        });

    }
}

module.exports = {
    search_json
};