
// DOM Elements
const rangeInput = document.querySelector('input.pricing-card__views-range')
const viewsContainer = document.querySelector('span.pricing-card__views')
const costContainer = document.querySelector('span.pricing-card__price')
const priceFreqContainer = document.querySelector('span.pricing-card__billing-frequency')
const frequencyToggle = document.querySelector('input#billing-freq')
const form = document.querySelector('form.pricing-card')

// Data & Global Variables
const VIEWS_DATA = [
    {
        pageViews: '10k',
        monthlyCost: 8,
        leftPercentage: 0
    },
    {
        pageViews: '50k',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100k',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500k',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M',
        monthlyCost: 36,
        leftPercentage: 100
    },
]

// Functions

// Prevent page refresh on submit.
form.addEventListener('submit', (e) => e.preventDefault())

//EIGHT
const updateLeftPercentage = () => {
    const { leftPercentage } = getViewsData()
    form.style.setProperty('--left', leftPercentage)
};

//TWO
const updateFormOnRangeInput = () => {
    updatePageViews()
    updateCost()
    updateLeftPercentage()
};

//THREE
const updatePageViews = () => {
    const { pageViews } = getViewsData()
    viewsContainer.textContent = `${pageViews} pageviews`
};

//FOUR
const getViewsData = () => {
    const selectedValue = rangeInput.value
    const index = selectedValue - 1
    return { pageViews, monthlyCost, leftPercentage } = VIEWS_DATA[index]
}

//FIVE
const updateCost = () => {
    const { monthlyCost } = getViewsData() //destructuring objects
    const isAnnual = annualFrequencySelected() //return something
    const price = isAnnual ? ((monthlyCost * 12) * 0.75) : monthlyCost //template literals
    costContainer.textContent = `$${price.toFixed(2)}`
    isAnnual ? priceFreqContainer.textContent = '/ year' : priceFreqContainer.textContent = '/ month'
};

//SIX
const annualFrequencySelected = () => { return frequencyToggle.checked };

//ONE
rangeInput.addEventListener('input', updateFormOnRangeInput)

//SEVEN
frequencyToggle.addEventListener('input', updateCost)