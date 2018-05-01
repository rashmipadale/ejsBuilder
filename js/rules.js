var Rules = {
    "validationRules" : [
        {
            "name":"responsive",
            "validate": true,
            "checks": ["width"]
        },
        {
            "name":"mcaClasses",
            "validate":true,
            "checks": ["mca-"]
        },
        {
            "name":"mcaComponents",
            "validate":false,
            "checks": ["mca-"]
        }
    ]
}