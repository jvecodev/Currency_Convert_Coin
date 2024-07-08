let country_list = {
    AED: "United Arab Emirates",
    AFN: "Afghanistan",
    XCD: "East Caribbean Dollar",
    ALL: "Albania",
    AMD: "Armenia",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angola",
    AQD: "Antarctica",
    ARS: "Argentina",
    AUD: "Australia",
    AZN: "Azerbaijan",
    BAM: "Bosnia and Herzegovina",
    BBD: "Barbados",
    BDT: "Bangladesh",
    XOF: "West African CFA Franc",
    BGN: "Bulgaria",
    BHD: "Bahrain",
    BIF: "Burundi",
    BMD: "Bermuda",
    BND: "Brunei Dollar",
    BOB: "Bolivia",
    BRL: "Brazil",
    BSD: "Bahamas",
    NOK: "Norway",
    BWP: "Botswana",
    BYR: "Belarus",
    BZD: "Belize",
    CAD: "Canada",
    CDF: "Congolese Franc",
    XAF: "Central African CFA Franc",
    CHF: "Switzerland",
    CLP: "Chile",
    CNY: "China",
    COP: "Colombia",
    CRC: "Costa Rica",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CYP: "Cyprus",
    CZK: "Czech Republic",
    DJF: "Djiboutian Franc",
    DKK: "Denmark",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    ECS: "Ecuador",
    EEK: "Estonia",
    EGP: "Egypt",
    ETB: "Ethiopia",
    EUR: "Euro",
    FJD: "Fiji Dollar",
    FKP: "Falkland Islands Pound",
    GBP: "British Pound",
    GEL: "Georgia",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli Shekel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Krona",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgyzstani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Lao Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LTL: "Lithuanian Litas",
    LVL: "Latvian Lats",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanmar Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRO: "Mauritanian Ouguiya",
    MTL: "Maltese Lira",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    XPF: "CFP Franc",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Cordoba",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Riyal",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SBD: "Solomon Islands Dollar",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SKK: "Slovak Koruna",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    STD: "Sao Tome and Principe Dobra",
    SVC: "Salvadoran Colon",
    SYP: "Syrian Pound",
    SZL: "Swazi Lilangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Pa'anga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistani Som",
    VEF: "Venezuelan Bolivar",
    VND: "Vietnamese Dong",
    VUV: "Vanuatu Vatu",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMK: "Zambian Kwacha",
    ZWD: "Zimbabwean Dollar",
};

// convert.js


const coinFrom = document.getElementById('coinfrom');
const coinTo = document.getElementById('cointo');
const valueInput = document.getElementById('value');
const btn = document.getElementById('btn');
const exRatetxt = document.getElementById('result');
const cotacaotxt = document.getElementById('cotacao');
const valuetxt = document.getElementById('valor');

function populateSelects() {
    Object.keys(country_list).forEach((currency) => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.innerHTML = currency;
        coinFrom.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.innerHTML = currency;
        coinTo.appendChild(optionTo);
    });
}
    async function getExchangeRate(){
        const quantia = valueInput.value;
        exRatetxt.innerHTML = 'Calculando...'; 
        cotacaotxt.innerHTML = 'Cotação atualizada em: ' + new Date().toLocaleString();
        valueInput.innerHTML = '';
        

        try{
            const resposta = await fetch(`https://v6.exchangerate-api.com/v6/9479f7139b6ea9a7b81af8d4/latest/${coinFrom.value}`);
            const dados = await resposta.json();
            const exRate = dados.conversion_rates[coinTo.value];
            const result = quantia * exRate.toFixed(2);
            exRatetxt.innerHTML = `${quantia} ${coinFrom.value} = ${result} ${coinTo.value}`;
            cotacaotxt.innerHTML = 'COTAÇÃO ATUALIZADA: ' + new Date().toLocaleString();
            valuetxt.innerHTML = `1 = ${coinFrom.value} → ${coinTo.value} = ${exRate.toFixed(2)}` ;
            
        }catch(error){
            exRatetxt.innerHTML = 'Erro ao calcular';
        }

    }
    window.addEventListener('load', populateSelects);
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        getExchangeRate();
});

populateSelects();
