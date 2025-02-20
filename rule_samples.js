regex_number = {
    age: {
        required: true,
        rules: [
            {
                regex: /^\d{2,2}$/,
                condition: "regex",
                error: "NB0001",
                message: "Digit should be 3",
            },
        ],
    },
};
regex_float = {
    price: {
        required: true,
        rules: [
            {
                condition: "regex",
                regex: /^\d+.?\d{0,2}$/,
                error: "FT0001",
                message: "This Field should be a decimal",
            },
        ],
    },
};
regex_email = {
    email: {
        required: true,
        rules: [
            {
                condition: "regex",
                regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                error: "ST0001",
                message: "This field should be Email",
            },
        ],
    },
};
regex_mobile = {
    mobile: {
        required: true,
        rules: [
            {
                condition: "regex",
                regex: /^(009665)\d{8}$/,
                error: "MB0001",
                message: "The Field should be mobile number",
            },
        ],
    },
};
number_bigger = {
    age: {
        required: true,
        rules: [
            {
                condition: "bigger_than",
                value: 100,
                error: "CM0001",
                message: "numbers not bigger than 100",
            },
            {
                condition: "bigger_than",
                value: 200,
                error: "CM0001",
                message: "numbers not bigger than 200",
            },
        ],
    },
};
number_smaller = {
    age: {
        required: true,
        rules: [
            {
                condition: "smaller_than",
                value: 20,
                error: "CM0002",
                message: "Number not smaller than 10",
            },
        ],
    },
};
date_before = {
    birthday: {
        required: true,
        rules: [
            {
                condition: "after_date",
                date: new Date(),
                error: "DT0001",
                message: "%1 is not after %2",
            },
        ],
    },
};
date_after = {
    next_visit: {
        required: true,
        rules: [
            {
                condition: "before_date",
                date: new Date(),
                error: "DT0002",
                message: "%1 is not after %2",
            },
        ],
    },
};
use_function = {
    id_number: {
        required: true,
        rules: [
            {
                condition: "function",
                value: "validate_id_type",
                param: "id_type",
                error: "FN0001",
                message: "id_number (%s1) is not correct id_type (%s2)",
            },
        ],
    },
};
required_if_equal = {
    iqama_number: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0001",
                key: "id_type",
                _condition: "is",
                value: "IQA",
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
required_if_gt = {
    discount: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0002",
                key: "age",
                _condition: "gt",
                value: 200,
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
required_if_gte = {
    discount: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0002",
                key: "age",
                _condition: "gte",
                value: 103,
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
required_if_lt = {
    discount: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0003",
                key: "age",
                _condition: "lt",
                value: 10,
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
required_if_lte = {
    discount: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0004",
                key: "age",
                _condition: "lte",
                value: 103,
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
required_if_in = {
    discount: {
        required: false,
        rules: [
            {
                condition: "required_if",
                error: "RQ0005",
                key: "id_type",
                _condition: "in",
                value: "ABC|IQA",
                message: "%s1 field is required based on %s2 value",
            },
        ],
    },
};
module.exports = {
    regex_digit: regex_number,
    regex_price: regex_float,
    regex_text: regex_email,
    regex_mb: regex_mobile,
};
