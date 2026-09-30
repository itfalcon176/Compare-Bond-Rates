/**
 * CompareBondRates.co.uk - Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initHeaderScroll();
});

/* ==========================================================================
   Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   Smooth Scroll to Lead Form
   ========================================================================== */
function scrollToForm() {
  const target = document.getElementById('lead-form-section');
  if (target) {
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Focus on first input
    setTimeout(() => {
      const firstInput = document.getElementById('investmentAmountSelect');
      if (firstInput) firstInput.focus();
    }, 600);
  }
}

/* ==========================================================================
   Bond Returns Calculator Engine
   ========================================================================== */
let calcState = {
  amount: 50000,
  term: 2,
  rate: 8.20,
  frequency: 'monthly' // 'monthly' | 'maturity'
};

function initCalculator() {
  updateCalculator();
}

function updateCalculator() {
  const amountInput = document.getElementById('calcAmountRange');
  const rateInput = document.getElementById('calcRateRange');

  if (amountInput) calcState.amount = parseFloat(amountInput.value) || 50000;
  if (rateInput) calcState.rate = parseFloat(rateInput.value) || 8.20;

  // Update visual slider readouts
  const amountDisplay = document.getElementById('amountDisplay');
  const rateDisplay = document.getElementById('rateDisplay');

  if (amountDisplay) amountDisplay.textContent = formatNumber(calcState.amount);
  if (rateDisplay) rateDisplay.textContent = calcState.rate.toFixed(2);

  calculateReturns();
}

function setCalcTerm(termYears, btnElement) {
  calcState.term = parseInt(termYears, 10);
  
  // Update button active states
  const buttons = document.querySelectorAll('.term-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  // Adjust preset rate based on term if default
  if (calcState.term === 1) setCalcRate(7.45);
  else if (calcState.term === 2) setCalcRate(8.20);
  else if (calcState.term === 3) setCalcRate(7.85);
  else if (calcState.term === 5) setCalcRate(7.60);

  calculateReturns();
}

function setCalcRate(rateVal) {
  calcState.rate = parseFloat(rateVal);
  const rateRange = document.getElementById('calcRateRange');
  const rateDisplay = document.getElementById('rateDisplay');
  
  if (rateRange) rateRange.value = calcState.rate;
  if (rateDisplay) rateDisplay.textContent = calcState.rate.toFixed(2);

  // Update preset pills active state
  const pills = document.querySelectorAll('.preset-pill');
  pills.forEach(pill => {
    if (pill.textContent.includes(rateVal.toString())) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  calculateReturns();
}

function setPayoutFreq(freq, btnElement) {
  calcState.frequency = freq;
  const freqButtons = document.querySelectorAll('.freq-btn');
  freqButtons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  
  calculateReturns();
}

function calculateReturns() {
  const principal = calcState.amount;
  const annualRate = calcState.rate / 100;
  const years = calcState.term;

  let totalProfit = 0;
  let maturityBalance = 0;
  let monthlyIncome = 0;
  let annualIncome = principal * annualRate;

  if (calcState.frequency === 'maturity') {
    // Annual compound interest
    maturityBalance = principal * Math.pow((1 + annualRate), years);
    totalProfit = maturityBalance - principal;
    monthlyIncome = totalProfit / (years * 12);
  } else {
    // Simple monthly distribution
    totalProfit = principal * annualRate * years;
    maturityBalance = principal + totalProfit;
    monthlyIncome = (principal * annualRate) / 12;
  }

  // Bank benchmark (average high street fixed savings at 3.80%)
  const bankRate = 0.038;
  const bankProfit = principal * bankRate * years;
  const diffProfit = Math.max(0, totalProfit - bankProfit);

  // DOM Updates
  const totalProfitElem = document.getElementById('totalProfitResult');
  const subProfitText = document.getElementById('profitSubText');
  const monthlyPayoutResult = document.getElementById('monthlyPayoutResult');
  const annualPayoutResult = document.getElementById('annualPayoutResult');
  const maturityTotalResult = document.getElementById('maturityTotalResult');
  
  const compareOurReturn = document.getElementById('compareOurReturn');
  const compareBankReturn = document.getElementById('compareBankReturn');
  const differenceAmount = document.getElementById('differenceAmount');

  if (totalProfitElem) totalProfitElem.textContent = '£' + formatNumber(Math.round(totalProfit));
  if (subProfitText) subProfitText.textContent = `Based on £${formatNumber(principal)} at ${calcState.rate.toFixed(2)}% over ${years} Year${years > 1 ? 's' : ''}`;
  if (monthlyPayoutResult) monthlyPayoutResult.textContent = '£' + formatCurrencyDecimal(monthlyIncome);
  if (annualPayoutResult) annualPayoutResult.textContent = '£' + formatCurrencyDecimal(annualIncome);
  if (maturityTotalResult) maturityTotalResult.textContent = '£' + formatCurrencyDecimal(maturityBalance);

  if (compareOurReturn) compareOurReturn.textContent = `£${formatNumber(Math.round(totalProfit))} Profit`;
  if (compareBankReturn) compareBankReturn.textContent = `£${formatNumber(Math.round(bankProfit))} Profit`;
  if (differenceAmount) differenceAmount.textContent = `£${formatNumber(Math.round(diffProfit))}`;
}

function applyFromCalculator() {
  // Sync selected calculator amount & term into lead form
  const amountSelect = document.getElementById('investmentAmountSelect');
  const termSelect = document.getElementById('investmentTermSelect');

  if (amountSelect) {
    if (calcState.amount <= 25000) amountSelect.value = '10000';
    else if (calcState.amount <= 100000) amountSelect.value = '50000';
    else if (calcState.amount <= 250000) amountSelect.value = '150000';
    else if (calcState.amount <= 500000) amountSelect.value = '300000';
    else amountSelect.value = '750000';
  }

  if (termSelect) {
    termSelect.value = calcState.term.toString();
  }

  scrollToForm();
}

function syncHeroFormWithCalculator(amountVal) {
  const numericVal = parseInt(amountVal, 10);
  if (!isNaN(numericVal)) {
    const amountSlider = document.getElementById('calcAmountRange');
    if (amountSlider) {
      amountSlider.value = numericVal;
      updateCalculator();
    }
  }
}

/* ==========================================================================
   Filter Bonds Grid
   ========================================================================== */
function filterBonds(termCategory, btnElement) {
  if (btnElement) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const cards = document.querySelectorAll('.bond-card');
  cards.forEach(card => {
    if (termCategory === 'all' || card.getAttribute('data-term') === termCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function selectBondQuote(bondName, suggestedAmount, termYears) {
  const amountSelect = document.getElementById('investmentAmountSelect');
  const termSelect = document.getElementById('investmentTermSelect');

  if (amountSelect && suggestedAmount) amountSelect.value = suggestedAmount;
  if (termSelect && termYears) termSelect.value = termYears;

  scrollToForm();
}

/* ==========================================================================
   Lead Form Submission & Verification Modal
   ========================================================================== */
let currentExpectedOtp = '';
let otpResendTimer = null;
let otpCooldownSeconds = 0;

function generateOtpCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const email = document.getElementById('emailAddress').value.trim();
  const termsCheck = document.getElementById('termsCheck').checked;

  if (!termsCheck) {
    alert('Please agree to the Terms and Privacy Policy to receive your rates.');
    return;
  }

  const submitBtn = document.getElementById('submitLeadBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Matching Best Rates...</span>';
  }

  setTimeout(() => {
    window.location.href = '/thank-you';
  }, 400);
}

function closeQuoteModal() {
  const modal = document.getElementById('quoteModal');
  modal.classList.remove('open');
  if (otpResendTimer) clearInterval(otpResendTimer);
}

function confirmOtpVerification() {
  const digits = [1, 2, 3, 4].map(i => {
    const el = document.getElementById('otpDigit' + i);
    return el ? el.value.trim() : '';
  });

  const entered = digits.join('');
  const errBox = document.getElementById('modalOtpError');

  if (entered.length < 4) {
    if (errBox) {
      errBox.textContent = 'Please enter the complete 4-digit code sent to your mobile.';
      errBox.style.display = 'block';
    }
    const emptyIndex = digits.findIndex(d => !d);
    const target = document.getElementById('otpDigit' + (emptyIndex !== -1 ? emptyIndex + 1 : 1));
    if (target) target.focus();
    return;
  }

  if (entered !== currentExpectedOtp) {
    if (errBox) {
      errBox.textContent = 'Incorrect code. Please enter the 4-digit code sent to your phone.';
      errBox.style.display = 'block';
    }
    return;
  }

  // Success
  if (errBox) errBox.style.display = 'none';
  document.getElementById('modalStepVerify').classList.remove('active');
  document.getElementById('modalStepSuccess').classList.add('active');
}

function moveOtp(currentInput, index) {
  // Only keep numeric character
  currentInput.value = currentInput.value.replace(/\D/g, '').slice(-1);

  const errBox = document.getElementById('modalOtpError');
  if (errBox) errBox.style.display = 'none';

  if (currentInput.value.length >= 1 && index < 4) {
    const next = document.getElementById('otpDigit' + (index + 1));
    if (next) next.focus();
  }
}

function handleOtpKey(event, currentInput, index) {
  if (event.key === 'Backspace' && !currentInput.value && index > 1) {
    const prev = document.getElementById('otpDigit' + (index - 1));
    if (prev) prev.focus();
  } else if (event.key === 'Enter') {
    confirmOtpVerification();
  }
}

function startOtpCooldown() {
  otpCooldownSeconds = 30;
  updateResendLink();

  if (otpResendTimer) clearInterval(otpResendTimer);
  otpResendTimer = setInterval(() => {
    otpCooldownSeconds--;
    if (otpCooldownSeconds <= 0) {
      clearInterval(otpResendTimer);
    }
    updateResendLink();
  }, 1000);
}

function updateResendLink() {
  const link = document.getElementById('resendSmsLink');
  if (!link) return;

  if (otpCooldownSeconds > 0) {
    link.textContent = `Resend SMS (${otpCooldownSeconds}s)`;
    link.style.pointerEvents = 'none';
    link.style.opacity = '0.6';
  } else {
    link.textContent = 'Resend SMS';
    link.style.pointerEvents = 'auto';
    link.style.opacity = '1';
  }
}

function resendOtp() {
  if (otpCooldownSeconds > 0) return;

  currentExpectedOtp = generateOtpCode();

  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('otpDigit' + i);
    if (el) el.value = '';
  }

  const errBox = document.getElementById('modalOtpError');
  if (errBox) errBox.style.display = 'none';

  const toastText = document.getElementById('modalSmsToastText');
  if (toastText) {
    toastText.textContent = `New verification code dispatched: ${currentExpectedOtp}`;
  }

  startOtpCooldown();

  const first = document.getElementById('otpDigit1');
  if (first) first.focus();
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function toggleFaq(btnElement) {
  const faqItem = btnElement.parentElement;
  const isActive = faqItem.classList.contains('active');

  // Close other open FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

/* ==========================================================================
   Legal Policies Modal Content System
   ========================================================================== */
const legalDocuments = {
  privacy: `
    <h2>Privacy Policy</h2>
    <p><strong>Last Updated: January 2026</strong></p>
    <h3>1. Who We Are</h3>
    <p>CompareBondRates.co.uk is owned and operated by Compare Bond Rates Limited ("we", "our", or "us"). Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. Company Registration Number: 12847593. We act as an independent data controller under the UK Data Protection Act 2018 and UK GDPR.</p>
    
    <h3>2. Information We Collect</h3>
    <p>We may collect personal information including: full name, contact telephone number, email address, UK postcode, target investment amount, preferred investment horizon, and communication history.</p>
    
    <h3>3. How We Use Your Data</h3>
    <p>We use your information exclusively to: generate your personalised fixed-rate bond comparison report, match your investment requirements with authorised UK financial product issuers, assess product eligibility, and maintain regulatory compliance.</p>
    
    <h3>4. Data Sharing & Security</h3>
    <p>Your details are transferred via bank-grade 256-bit SSL encryption. We only introduce you to FSCS-covered, FCA-authorised banks and institutional issuers. We never sell your personal data to unaffiliated third-party marketing lists.</p>
    
    <h3>5. Your Statutory Rights</h3>
    <p>Under UK GDPR, you retain the right to access, rectify, or request erasure of your data, or object to processing. To exercise these rights, email <strong>privacy@comparebondrates.co.uk</strong>.</p>
  `,
  terms: `
    <h2>Terms & Conditions</h2>
    <p><strong>Last Updated: January 2026</strong></p>
    <h3>1. Intermediary Service</h3>
    <p>Compare Bond Rates Limited provides an impartial comparison and introductory service for fixed-rate bonds and cash deposit products. We do not manufacture or hold client funds directly.</p>
    
    <h3>2. No Upfront Fee to Clients</h3>
    <p>Our service is 100% free for individual investors. We are remunerated through standard intermediary commissions paid directly by partner financial institutions upon successful account opening.</p>
    
    <h3>3. Independent Information</h3>
    <p>All rates displayed are subject to institutional availability and individual underwriting criteria. Information provided on this website does not constitute direct regulated financial advice; investors should review full product terms before committing funds.</p>
    
    <h3>4. Limitation of Liability</h3>
    <p>While we verify provider credentials and FSCS registration, Compare Bond Rates Limited is not liable for performance variations of third-party institutions.</p>
  `,
  cookie: `
    <h2>Cookie Policy</h2>
    <p><strong>Last Updated: January 2026</strong></p>
    <h3>1. What are Cookies?</h3>
    <p>Cookies are small text files placed on your device to enhance site navigation, measure comparison tool usage, and store your slider preferences.</p>
    
    <h3>2. Cookies We Deploy</h3>
    <ul>
      <li><strong>Essential Cookies:</strong> Required for the rate calculator and secure form submission.</li>
      <li><strong>Analytics Cookies:</strong> Anonymised analytics to help us measure site performance and popular bond terms.</li>
      <li><strong>Preference Cookies:</strong> Retains your selected investment currency and term filters.</li>
    </ul>
  `,
  complaints: `
    <h2>Complaints Procedure</h2>
    <p><strong>Last Updated: January 2026</strong></p>
    <h3>Our Commitment to Service</h3>
    <p>We strive to provide outstanding customer support. If you have any concern or complaint regarding our intermediary service:</p>
    <p><strong>Email:</strong> complaints@comparebondrates.co.uk<br>
       <strong>Telephone:</strong> 070 2165 1946<br>
       <strong>Post:</strong> Complaints Department, Compare Bond Rates Limited, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
    <h3>Resolution Timelines</h3>
    <p>We acknowledge all written complaints within 1 business day and issue a formal resolution within 4 weeks. If unresolved, eligible complainants may refer the matter to the Financial Ombudsman Service (Exchange Tower, London E14 9SR).</p>
  `,
  slavery: `
    <h2>Modern Slavery & Human Trafficking Statement</h2>
    <p><strong>Pursuant to Section 54(1) of the Modern Slavery Act 2015</strong></p>
    <p>Compare Bond Rates Limited maintains a strict zero-tolerance approach to modern slavery and human trafficking across all operational practices and partner supply chains. We partner solely with established UK and European banking institutions subject to rigorous compliance and ethical governance standards.</p>
  `
};

function openLegalModal(docType) {
  const modal = document.getElementById('legalModal');
  const body = document.getElementById('legalModalBody');
  if (modal && body && legalDocuments[docType]) {
    body.innerHTML = legalDocuments[docType];
    modal.classList.add('open');
  }
}

function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  if (modal) modal.classList.remove('open');
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  const quoteModal = document.getElementById('quoteModal');
  const legalModal = document.getElementById('legalModal');
  if (e.target === quoteModal) closeQuoteModal();
  if (e.target === legalModal) closeLegalModal();
});

/* ==========================================================================
   Helper Formatters
   ========================================================================== */
function formatNumber(num) {
  return Number(num).toLocaleString('en-GB');
}

function formatCurrencyDecimal(num) {
  return Number(num).toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/* ==========================================================================
   Cookie Consent Banner Management
   ========================================================================== */
function initCookieBanner() {
  const consent = localStorage.getItem('cbr_cookie_consent');
  const banner = document.getElementById('cookieBannerPopup');
  if (!banner) return;
  if (!consent) {
    setTimeout(() => {
      banner.style.display = 'block';
    }, 700);
  }
}

function acceptAllCookies() {
  localStorage.setItem('cbr_cookie_consent', 'all');
  localStorage.setItem('cbr_cookie_consent_date', new Date().toISOString());
  const banner = document.getElementById('cookieBannerPopup');
  if (banner) banner.style.display = 'none';
  if (typeof fbq === 'function') {
    fbq('consent', 'grant');
  }
}

function acceptEssentialCookies() {
  localStorage.setItem('cbr_cookie_consent', 'essential');
  localStorage.setItem('cbr_cookie_consent_date', new Date().toISOString());
  const banner = document.getElementById('cookieBannerPopup');
  if (banner) banner.style.display = 'none';
  if (typeof fbq === 'function') {
    fbq('consent', 'revoke');
  }
}

function reopenCookieBanner() {
  const banner = document.getElementById('cookieBannerPopup');
  if (banner) banner.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();
});

