// Enhanced Mock Data with detailed transaction history
const mockData = {
  products: [
    { id: 1, name: "Nasi Lemak", price: 12.50, category: "Main", sales: 45, margin: 0.65 },
    { id: 2, name: "Char Kway Teow", price: 8.90, category: "Main", sales: 32, margin: 0.58 },
    { id: 3, name: "Teh Tarik", price: 3.50, category: "Beverage", sales: 78, margin: 0.72 },
    { id: 4, name: "Roti Canai", price: 4.20, category: "Appetizer", sales: 23, margin: 0.68 },
    { id: 5, name: "Laksa", price: 11.00, category: "Main", sales: 18, margin: 0.62 },
    { id: 6, name: "Kopi O", price: 2.80, category: "Beverage", sales: 56, margin: 0.75 },
    { id: 7, name: "Curry Puff", price: 2.50, category: "Snack", sales: 12, margin: 0.70 },
    { id: 8, name: "Milo Ais", price: 4.50, category: "Beverage", sales: 34, margin: 0.73 },
    { id: 9, name: "Satay (10 sticks)", price: 15.00, category: "Main", sales: 28, margin: 0.60 }
  ],
  
  customers: [
    { 
      id: 1, 
      name: "Ahmad Rahman", 
      phone: "+60123456789", 
      totalSpent: 342.60, 
      visits: 15, 
      favoriteItems: ["Nasi Lemak", "Teh Tarik"],
      joinDate: "2024-01-15",
      lastVisit: "2025-01-05",
      offerStatus: null, // null, 'sent', 'redeemed'
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2025-01-05", amount: 16.00, items: ["Nasi Lemak", "Teh Tarik"], voucher: null, cashback: { claimed: 0.80, redeemed: 0 } },
        { date: "2025-01-02", amount: 23.40, items: ["Char Kway Teow", "Kopi O", "Curry Puff"], voucher: "NEW2025", cashback: { claimed: 1.17, redeemed: 0 } },
        { date: "2024-12-28", amount: 31.00, items: ["Satay (10 sticks)", "Nasi Lemak"], voucher: null, cashback: { claimed: 1.55, redeemed: 0 } },
        { date: "2024-12-20", amount: 18.90, items: ["Laksa", "Teh Tarik", "Roti Canai"], voucher: null, cashback: { claimed: 0.95, redeemed: 1.20 } },
        { date: "2024-12-15", amount: 12.50, items: ["Nasi Lemak"], voucher: null, cashback: { claimed: 0.63, redeemed: 0 } }
      ]
    },
    { 
      id: 2, 
      name: "Siti Nurhaliza", 
      phone: "+60187654321", 
      totalSpent: 298.30, 
      visits: 12, 
      favoriteItems: ["Char Kway Teow", "Kopi O"],
      joinDate: "2024-02-10",
      lastVisit: "2025-01-04",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2025-01-04", amount: 26.70, items: ["Char Kway Teow", "Kopi O", "Satay (10 sticks)"], voucher: null, cashback: { claimed: 1.34, redeemed: 0 } },
        { date: "2024-12-30", amount: 11.70, items: ["Char Kway Teow", "Kopi O"], voucher: null, cashback: { claimed: 0.59, redeemed: 0 } },
        { date: "2024-12-22", amount: 35.40, items: ["Nasi Lemak", "Char Kway Teow", "Teh Tarik", "Milo Ais"], voucher: "WEEKEND20", cashback: { claimed: 1.77, redeemed: 0.80 } },
        { date: "2024-12-18", amount: 19.40, items: ["Laksa", "Char Kway Teow"], voucher: null, cashback: { claimed: 0.97, redeemed: 0 } }
      ]
    },
    { 
      id: 3, 
      name: "Raj Kumar", 
      phone: "+60195551234", 
      totalSpent: 267.80, 
      visits: 14, 
      favoriteItems: ["Laksa", "Roti Canai"],
      joinDate: "2024-03-05",
      lastVisit: "2025-01-03",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2025-01-03", amount: 15.20, items: ["Laksa", "Roti Canai"], voucher: null, cashback: { claimed: 0.76, redeemed: 0 } },
        { date: "2024-12-29", amount: 22.50, items: ["Nasi Lemak", "Laksa"], voucher: null, cashback: { claimed: 1.13, redeemed: 0 } },
        { date: "2024-12-25", amount: 28.90, items: ["Satay (10 sticks)", "Roti Canai", "Teh Tarik"], voucher: "XMAS15", cashback: { claimed: 1.45, redeemed: 1.50 } }
      ]
    },
    { 
      id: 4, 
      name: "Lim Wei Ming", 
      phone: "+60162223333", 
      totalSpent: 234.50, 
      visits: 11, 
      favoriteItems: ["Teh Tarik", "Curry Puff"],
      joinDate: "2024-04-12",
      lastVisit: "2025-01-01",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2025-01-01", amount: 19.50, items: ["Teh Tarik", "Curry Puff", "Roti Canai"], voucher: null, cashback: { claimed: 0.98, redeemed: 0 } },
        { date: "2024-12-27", amount: 32.40, items: ["Nasi Lemak", "Char Kway Teow", "Teh Tarik"], voucher: null, cashback: { claimed: 1.62, redeemed: 0 } }
      ]
    },
    { 
      id: 5, 
      name: "Fatimah Ali", 
      phone: "+60174445555", 
      totalSpent: 198.20, 
      visits: 9, 
      favoriteItems: ["Nasi Lemak", "Milo Ais"],
      joinDate: "2024-05-20",
      lastVisit: "2024-12-31",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2024-12-31", amount: 17.00, items: ["Nasi Lemak", "Milo Ais"], voucher: null, cashback: { claimed: 0.85, redeemed: 0 } },
        { date: "2024-12-24", amount: 25.50, items: ["Nasi Lemak", "Satay (10 sticks)"], voucher: "XMAS15", cashback: { claimed: 1.28, redeemed: 2.10 } }
      ]
    },
    // Additional customers for extended VIP analysis
    { 
      id: 6, 
      name: "Chen Wei Liang", 
      phone: "+60123456790", 
      totalSpent: 189.40, 
      visits: 8, 
      favoriteItems: ["Laksa", "Kopi O"],
      joinDate: "2024-06-10",
      lastVisit: "2024-12-30",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2024-12-30", amount: 21.40, items: ["Laksa", "Kopi O"], voucher: null, cashback: { claimed: 1.07, redeemed: 0 } }
      ]
    },
    { 
      id: 7, 
      name: "Nurul Aisyah", 
      phone: "+60187654322", 
      totalSpent: 176.80, 
      visits: 10, 
      favoriteItems: ["Char Kway Teow", "Milo Ais"],
      joinDate: "2024-07-15",
      lastVisit: "2024-12-29",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2024-12-29", amount: 18.80, items: ["Char Kway Teow", "Milo Ais"], voucher: null, cashback: { claimed: 0.94, redeemed: 0 } }
      ]
    },
    { 
      id: 8, 
      name: "Muthu Krishnan", 
      phone: "+60195551235", 
      totalSpent: 165.30, 
      visits: 7, 
      favoriteItems: ["Roti Canai", "Teh Tarik"],
      joinDate: "2024-08-20",
      lastVisit: "2024-12-28",
      offerStatus: null,
      offerSentDate: null,
      redemptionRate: 0,
      transactions: [
        { date: "2024-12-28", amount: 15.70, items: ["Roti Canai", "Teh Tarik"], voucher: null, cashback: { claimed: 0.79, redeemed: 0 } }
      ]
    }
  ],
  
  salesByDay: {
    "Monday": 320.50,
    "Tuesday": 285.20,
    "Wednesday": 198.30,
    "Thursday": 310.80,
    "Friday": 445.60,
    "Saturday": 520.90,
    "Sunday": 380.40
  },
  
  averageBasketSize: 18.50,
  customerRetentionRate: 0.68,
  cashbackProgram: {
    totalClaimed: 245.60,
    totalRedeemed: 89.30,
    activeUsers: 67
  }
};

// Global variable to store current VIP count selection
let currentVIPCount = 5;

// Generate 3 Generic Opportunity Highlights with data insights
function generateGenericOpportunities() {
  const opportunities = [];
  
  // 1. Revenue Opportunity - Slow Day Boost
  const slowestDay = Object.entries(mockData.salesByDay)
    .sort(([,a], [,b]) => a - b)[0];
  
  opportunities.push({
    id: "slow-day-boost",
    type: "Revenue Growth",
    icon: "📈",
    title: `Wonderful ${slowestDay[0]} Campaign`,
    insight: "Insight based on analysis of your last 12 weeks of sales data",
    description: `${slowestDay[0]} generates RM ${slowestDay[1].toFixed(2)} vs RM ${Math.max(...Object.values(mockData.salesByDay)).toFixed(2)} on your best day. A targeted promotion could bridge this gap.`,
    impact: `+RM ${((Math.max(...Object.values(mockData.salesByDay)) - slowestDay[1]) * 0.3).toFixed(2)} potential weekly revenue`,
    action: "Explore Campaign Options",
    color: "#4CAF50",
    campaignData: {
      day: slowestDay[0],
      currentRevenue: slowestDay[1],
      bestDayRevenue: Math.max(...Object.values(mockData.salesByDay)),
      minDiscount: 10,
      maxDiscount: 25,
      baseProjection: 20 // Base projection percentage at 10% discount
    }
  });
  
  // 2. Basket Size Opportunity
  const highMarginItems = mockData.products.filter(p => p.margin > 0.65);
  const avgBasket = mockData.averageBasketSize;
  const tehTarikSales = mockData.products.find(p => p.name === "Teh Tarik").sales;
  
  opportunities.push({
    id: "basket-size-boost",
    type: "Basket Size Growth",
    icon: "🛒",
    title: "Perfect Pair Combo Campaign",
    insight: `Insight based on ${tehTarikSales * 3} instances of customers buying Teh Tarik without a snack`,
    description: `Current average basket: RM ${avgBasket.toFixed(2)}. Bundle high-margin items like ${highMarginItems.slice(0,2).map(p => p.name).join(' + ')} to boost AOV.`,
    impact: `+RM ${(avgBasket * 0.25).toFixed(2)} per transaction (25% increase)`,
    action: "Design Combo Deals",
    color: "#2196F3",
    campaignData: {
      currentAOV: avgBasket,
      highMarginItems: highMarginItems.slice(0,3),
      minDiscount: 5,
      maxDiscount: 20,
      baseProjection: 15
    }
  });
  
  // 3. Customer Retention - Cashback Program
  const cashbackData = mockData.cashbackProgram;
  const unredeemedCashback = cashbackData.totalClaimed - cashbackData.totalRedeemed;
  
  opportunities.push({
    id: "cashback-activation",
    type: "Customer Retention",
    icon: "🎯",
    title: "Cashback Activation Campaign",
    insight: "Insight based on dormant cashback analysis across 67 active customers",
    description: `RM ${unredeemedCashback.toFixed(2)} in unclaimed cashback from ${cashbackData.activeUsers} customers. Remind them to redeem and drive repeat visits.`,
    impact: `${Math.round(unredeemedCashback / avgBasket)} potential return visits`,
    action: "Create Reminder Campaign",
    color: "#FF9800",
    campaignData: {
      unredeemedAmount: unredeemedCashback,
      activeUsers: cashbackData.activeUsers,
      minIncentive: 0,
      maxIncentive: 15,
      baseProjection: 25
    }
  });
  
  return opportunities;
}

// Generate VIP Customer Analysis with extended customer list
function generateVIPCustomers(count = 5) {
  return mockData.customers
    .map(customer => {
      const avgSpend = customer.totalSpent / customer.visits;
      const ltv = customer.totalSpent; // Simplified LTV
      const daysSinceLastVisit = Math.floor((new Date() - new Date(customer.lastVisit)) / (1000 * 60 * 60 * 24));
      
      // Generate personalized offer based on customer data
      const favoriteItem = customer.favoriteItems[0];
      const isHighValue = customer.totalSpent > 250;
      const isFrequentVisitor = customer.visits > 12;
      
      let offer, smsTemplate, personalTouch;
      
      // Generate personal touch based on customer behavior
      if (daysSinceLastVisit > 14) {
        personalTouch = "We noticed you haven't visited in a little while, hope to see you again soon!";
      } else if (customer.visits > 12) {
        personalTouch = "Thanks for being such a regular, we truly appreciate it!";
      } else if (customer.totalSpent > 300) {
        personalTouch = "You're one of our most valued customers - this offer is just for you!";
      } else {
        personalTouch = "We love having you as part of our family!";
      }
      
      if (isHighValue && isFrequentVisitor) {
        offer = `VIP Exclusive: 20% off ${favoriteItem} + Free Premium Drink`;
        smsTemplate = `Hi ${customer.name}! 🌟 You're our VIP with ${customer.visits} visits & RM ${customer.totalSpent.toFixed(2)} spent! Enjoy 20% off your favorite ${favoriteItem} + FREE premium drink this week. Valid until Sunday. Show this SMS to redeem. Thank you for your loyalty! 👑`;
      } else if (isHighValue) {
        offer = `Loyalty Reward: 15% off ${favoriteItem} + Combo Deal`;
        smsTemplate = `Hello ${customer.name}! 🎉 You've spent RM ${customer.totalSpent.toFixed(2)} with us! Enjoy 15% off ${favoriteItem} + any drink for just RM 2 extra. Valid for 7 days. Present this SMS to claim. We appreciate your support! ☕`;
      } else {
        offer = `Special Combo: ${favoriteItem} + Free Side`;
        smsTemplate = `Hi ${customer.name}! Thanks for being a loyal customer with ${customer.visits} visits! Get your favorite ${favoriteItem} + FREE side dish this week. Valid until Sunday. Show this SMS to redeem! 🍽️`;
      }
      
      return {
        ...customer,
        avgSpend: avgSpend,
        ltv: ltv,
        daysSinceLastVisit: daysSinceLastVisit,
        score: (ltv * 0.6) + (customer.visits * 0.4), // Weighted more towards LTV
        personalizedOffer: offer,
        smsTemplate: smsTemplate,
        personalTouch: personalTouch
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

// UI Rendering Functions
function renderGenericOpportunityCard(opportunity) {
  return `
    <div class="opportunity-card generic-card clickable" style="border-left-color: ${opportunity.color}" onclick="showCampaignDetails('${opportunity.id}')">
      <div class="card-header">
        <div class="opportunity-icon">${opportunity.icon}</div>
        <div class="opportunity-info">
          <h3>${opportunity.title}</h3>
          <span class="opportunity-type">${opportunity.type}</span>
          <div class="data-insight">${opportunity.insight}</div>
        </div>
      </div>
      <div class="card-content">
        <p>${opportunity.description}</p>
        <div class="impact-section">
          <span class="impact-label">Business Impact:</span>
          <span class="impact-value">${opportunity.impact}</span>
        </div>
        <button class="action-btn clickable" style="background-color: ${opportunity.color}">${opportunity.action}</button>
      </div>
    </div>
  `;
}

function renderCampaignDetailsModal(opportunity) {
  return `
    <div class="modal-overlay" onclick="closeCampaignDetails()">
      <div class="modal-content campaign-modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>${opportunity.title}</h3>
          <button class="close-btn clickable" onclick="closeCampaignDetails()">×</button>
        </div>
        <div class="modal-body">
          <div class="data-insights-section">
            <h4>📊 Data-Driven Insights</h4>
            <div class="insights-summary">
              <div class="insight-item">
                <div class="insight-icon">🔍</div>
                <div class="insight-content">
                  <div class="insight-title">Analysis Source</div>
                  <div class="insight-description">${opportunity.insight}</div>
                </div>
              </div>
              ${generateSpecificInsights(opportunity)}
            </div>
          </div>
          
          <div class="campaign-strategy-section">
            <h4>🎯 Actionable Campaign Strategy</h4>
            <div class="campaign-description">
              <p>${opportunity.description}</p>
            </div>
            
            <div class="goal-slider-section">
              <h4>Customize Your Campaign Strategy:</h4>
              <div class="slider-container">
                <div class="slider-header">
                  <span class="slider-label">Discount Level:</span>
                  <span class="slider-value" id="discount-value">${opportunity.campaignData.minDiscount}%</span>
                </div>
                <input type="range" 
                       id="discount-slider" 
                       class="goal-slider"
                       min="${opportunity.campaignData.minDiscount}" 
                       max="${opportunity.campaignData.maxDiscount}" 
                       value="${opportunity.campaignData.minDiscount}"
                       oninput="updateProjections('${opportunity.id}', this.value)">
                <div class="slider-range">
                  <span>${opportunity.campaignData.minDiscount}%</span>
                  <span>${opportunity.campaignData.maxDiscount}%</span>
                </div>
              </div>
              
              <div class="projection-results" id="projection-results">
                ${renderProjectionResults(opportunity, opportunity.campaignData.minDiscount)}
              </div>
            </div>
            
            <div id="selected-template" class="template-section">
              <h4>Campaign Message Template:</h4>
              <textarea id="campaign-message" class="campaign-textarea" rows="4" placeholder="Adjust the slider above to generate your campaign message..."></textarea>
              <div class="template-actions">
                <button class="launch-btn clickable" onclick="launchCampaign()">🚀 Launch Campaign</button>
                <button class="preview-btn clickable" onclick="previewCampaign()">👁️ Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateSpecificInsights(opportunity) {
  if (opportunity.id === 'slow-day-boost') {
    const slowestDay = Object.entries(mockData.salesByDay).sort(([,a], [,b]) => a - b)[0];
    const bestDay = Object.entries(mockData.salesByDay).sort(([,a], [,b]) => b - a)[0];
    const gapPercentage = ((bestDay[1] - slowestDay[1]) / bestDay[1] * 100).toFixed(1);
    
    return `
      <div class="insight-item">
        <div class="insight-icon">📉</div>
        <div class="insight-content">
          <div class="insight-title">Revenue Gap Identified</div>
          <div class="insight-description">${slowestDay[0]} generates ${gapPercentage}% less revenue than your best day (${bestDay[0]})</div>
        </div>
      </div>
      <div class="insight-item">
        <div class="insight-icon">💰</div>
        <div class="insight-content">
          <div class="insight-title">Opportunity Size</div>
          <div class="insight-description">Potential to increase ${slowestDay[0]} revenue by RM ${(bestDay[1] - slowestDay[1]).toFixed(2)} weekly</div>
        </div>
      </div>
    `;
  } else if (opportunity.id === 'basket-size-boost') {
    const tehTarikSales = mockData.products.find(p => p.name === "Teh Tarik").sales;
    const snackItems = mockData.products.filter(p => p.category === "Snack" || p.category === "Appetizer");
    const avgSnackPrice = snackItems.reduce((sum, item) => sum + item.price, 0) / snackItems.length;
    
    return `
      <div class="insight-item">
        <div class="insight-icon">🥤</div>
        <div class="insight-content">
          <div class="insight-title">Missed Pairing Opportunities</div>
          <div class="insight-description">${tehTarikSales * 3} instances of Teh Tarik sold without snacks in the last month</div>
        </div>
      </div>
      <div class="insight-item">
        <div class="insight-icon">📈</div>
        <div class="insight-content">
          <div class="insight-title">Bundle Potential</div>
          <div class="insight-description">Average snack price: RM ${avgSnackPrice.toFixed(2)} - high margin items ready for bundling</div>
        </div>
      </div>
    `;
  } else if (opportunity.id === 'cashback-activation') {
    const cashbackData = mockData.cashbackProgram;
    const unredeemedCashback = cashbackData.totalClaimed - cashbackData.totalRedeemed;
    const redemptionRate = (cashbackData.totalRedeemed / cashbackData.totalClaimed * 100).toFixed(1);
    
    return `
      <div class="insight-item">
        <div class="insight-icon">💳</div>
        <div class="insight-content">
          <div class="insight-title">Dormant Cashback</div>
          <div class="insight-description">RM ${unredeemedCashback.toFixed(2)} in unclaimed cashback across ${cashbackData.activeUsers} customers</div>
        </div>
      </div>
      <div class="insight-item">
        <div class="insight-icon">🎯</div>
        <div class="insight-content">
          <div class="insight-title">Low Redemption Rate</div>
          <div class="insight-description">Only ${redemptionRate}% of earned cashback has been redeemed - huge activation opportunity</div>
        </div>
      </div>
    `;
  }
  return '';
}

function renderProjectionResults(opportunity, discountValue) {
  let projectedIncrease, additionalRevenue, templateMessage, roiEstimate;
  
  if (opportunity.id === 'slow-day-boost') {
    projectedIncrease = opportunity.campaignData.baseProjection + (discountValue - opportunity.campaignData.minDiscount) * 2;
    const projectedRevenue = opportunity.campaignData.currentRevenue * (1 + projectedIncrease / 100);
    additionalRevenue = projectedRevenue - opportunity.campaignData.currentRevenue;
    const campaignCost = opportunity.campaignData.currentRevenue * (discountValue / 100);
    roiEstimate = additionalRevenue / campaignCost;
    templateMessage = `🎉 Wonderful ${opportunity.campaignData.day} Special! Get ${discountValue}% OFF everything in store! Limited time offer - today only. Visit us and save big! 🛍️`;
  } else if (opportunity.id === 'basket-size-boost') {
    projectedIncrease = opportunity.campaignData.baseProjection + (discountValue - opportunity.campaignData.minDiscount) * 1.5;
    additionalRevenue = opportunity.campaignData.currentAOV * (projectedIncrease / 100);
    const tehTarikPrice = mockData.products.find(p => p.name === "Teh Tarik").price;
    const curryPuffPrice = mockData.products.find(p => p.name === "Curry Puff").price;
    const originalBundlePrice = tehTarikPrice + curryPuffPrice;
    const bundlePrice = originalBundlePrice * (1 - discountValue / 100);
    const estimatedBundleSales = 50; // Estimated bundle sales per week
    const campaignCost = estimatedBundleSales * (originalBundlePrice - bundlePrice);
    roiEstimate = (additionalRevenue * 4) / campaignCost; // Monthly ROI
    templateMessage = `🍽️ Perfect Pair Combo Alert! Teh Tarik + Curry Puff bundle for RM ${bundlePrice.toFixed(2)} (was RM ${originalBundlePrice.toFixed(2)}) - Save ${discountValue}%! Limited time offer. Order now! 🥤`;
  } else if (opportunity.id === 'cashback-activation') {
    projectedIncrease = opportunity.campaignData.baseProjection + (discountValue * 2);
    additionalRevenue = Math.round(opportunity.campaignData.activeUsers * projectedIncrease / 100) * mockData.averageBasketSize;
    const campaignCost = discountValue > 0 ? opportunity.campaignData.activeUsers * (discountValue / 100) * mockData.averageBasketSize : 100; // Base SMS cost
    roiEstimate = additionalRevenue / campaignCost;
    templateMessage = discountValue > 0 
      ? `⏰ Your cashback is waiting! Use it now and get ${discountValue}% extra on new purchases! Limited time offer.`
      : `💰 You have cashback waiting! Use it on your next visit and treat yourself to something special.`;
  }
  
  // Update the template message
  setTimeout(() => {
    const messageTextarea = document.getElementById('campaign-message');
    if (messageTextarea) {
      messageTextarea.value = templateMessage;
    }
  }, 100);
  
  return `
    <div class="projection-card">
      <div class="projection-item">
        <span class="projection-label">Projected Increase:</span>
        <span class="projection-value success">+${projectedIncrease.toFixed(1)}%</span>
      </div>
      <div class="projection-item">
        <span class="projection-label">Additional Revenue:</span>
        <span class="projection-value success">+RM ${additionalRevenue.toFixed(2)}</span>
      </div>
      <div class="projection-item">
        <span class="projection-label">ROI Estimate:</span>
        <span class="projection-value success">${roiEstimate.toFixed(1)}x</span>
      </div>
    </div>
  `;
}

function renderVIPCustomerCard(customer, index) {
  const statusClass = customer.offerStatus ? `status-${customer.offerStatus}` : '';
  const statusBadge = customer.offerStatus 
    ? `<div class="offer-status ${statusClass}">${customer.offerStatus === 'sent' ? '📤 Sent' : '✅ Redeemed'}</div>`
    : '';
  
  return `
    <div class="vip-customer-card clickable ${statusClass}" onclick="showCustomerDetails(${customer.id})">
      <div class="vip-header">
        <div class="vip-rank">#${index + 1}</div>
        <h4 class="customer-name">${customer.name}</h4>
        <span class="vip-badge">VIP</span>
        ${statusBadge}
      </div>
      <div class="vip-stats">
        <div class="stat-item">
          <span class="stat-label">LTV</span>
          <span class="stat-value">RM ${customer.totalSpent.toFixed(2)}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Visits</span>
          <span class="stat-value">${customer.visits}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Avg Spend</span>
          <span class="stat-value">RM ${customer.avgSpend.toFixed(2)}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Last Visit</span>
          <span class="stat-value ${customer.daysSinceLastVisit > 14 ? 'warning' : ''}">${customer.daysSinceLastVisit}d ago</span>
        </div>
      </div>
      <div class="personalized-offer">
        <div class="offer-header">
          <span class="offer-icon">🎁</span>
          <span class="offer-label">Personalized Offer:</span>
        </div>
        <div class="offer-text">${customer.personalizedOffer}</div>
        ${customer.offerStatus === 'sent' ? `
          <div class="success-tracker">
            <div class="tracker-label">Redemption Rate:</div>
            <div class="tracker-value">${customer.redemptionRate}%</div>
          </div>
        ` : ''}
      </div>
      <div class="vip-actions">
        <button class="send-offer-btn clickable" onclick="event.stopPropagation(); sendVIPOffer(${customer.id})" 
                ${customer.offerStatus === 'sent' ? 'disabled' : ''}>
          ${customer.offerStatus === 'sent' ? '✅ Sent' : '📱 Send Offer'}
        </button>
        <button class="view-details-btn clickable" onclick="event.stopPropagation(); showCustomerDetails(${customer.id})">
          📊 View Details
        </button>
      </div>
    </div>
  `;
}

function renderCustomerDetailsModal(customer) {
  const totalCashbackClaimed = customer.transactions.reduce((sum, t) => sum + t.cashback.claimed, 0);
  const totalCashbackRedeemed = customer.transactions.reduce((sum, t) => sum + t.cashback.redeemed, 0);
  const availableCashback = totalCashbackClaimed - totalCashbackRedeemed;
  
  return `
    <div class="modal-overlay" onclick="closeCustomerDetails()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>${customer.name} - Customer Profile</h3>
          <button class="close-btn clickable" onclick="closeCustomerDetails()">×</button>
        </div>
        <div class="modal-body">
          <div class="customer-summary">
            <div class="summary-stats">
              <div class="summary-item">
                <span class="summary-label">Member Since</span>
                <span class="summary-value">${new Date(customer.joinDate).toLocaleDateString()}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Total Cashback Earned</span>
                <span class="summary-value">RM ${totalCashbackClaimed.toFixed(2)}</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Cashback Redeemed</span>
                <span class="summary-value">RM ${totalCashbackRedeemed.toFixed(2)}</span>
              </div>
              <div class="summary-item summary-item-center">
                <span class="summary-label">Available Cashback</span>
                <span class="summary-value highlight">RM ${availableCashback.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div class="vip-offer-section">
            <h4>🎁 Personalized VIP Offer</h4>
            <div class="offer-details">
              <div class="offer-text-large">${customer.personalizedOffer}</div>
              <div class="sms-template-section">
                <div class="template-header">
                  <label>Ready-to-Send SMS Template:</label>
                  <button class="magic-wand-btn clickable" onclick="addPersonalTouch(${customer.id})" title="Add personal touch">
                    ✨ Magic Touch
                  </button>
                </div>
                <textarea class="sms-template" rows="4" id="sms-template-${customer.id}">${customer.smsTemplate}</textarea>
                <div class="sms-actions">
                  <button class="send-btn clickable" onclick="sendSMS(${customer.id})">📱 Send SMS</button>
                  <button class="edit-btn clickable" onclick="editSMSTemplate(${customer.id})">✏️ Edit Template</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="transactions-list">
            <h4>Recent Transactions</h4>
            ${customer.transactions.map(transaction => `
              <div class="transaction-item">
                <div class="transaction-header">
                  <span class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</span>
                  <span class="transaction-amount">RM ${transaction.amount.toFixed(2)}</span>
                </div>
                <div class="transaction-details">
                  <div class="items-ordered">
                    <span class="detail-label">Items:</span>
                    <span class="detail-value">${transaction.items.join(', ')}</span>
                  </div>
                  ${transaction.voucher ? `
                    <div class="voucher-used">
                      <span class="detail-label">Voucher:</span>
                      <span class="detail-value voucher">${transaction.voucher}</span>
                    </div>
                  ` : ''}
                  <div class="cashback-info">
                    <span class="detail-label">Cashback:</span>
                    <div class="cashback-breakdown">
                      <div class="cashback-line">Earned: RM ${transaction.cashback.claimed.toFixed(2)}</div>
                      ${transaction.cashback.redeemed > 0 ? `<div class="cashback-line">Redeemed: RM ${transaction.cashback.redeemed.toFixed(2)}</div>` : ''}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderVIPCountSelector() {
  return `
    <div class="vip-count-selector">
      <label for="vip-count">Show Top:</label>
      <select id="vip-count" class="vip-count-dropdown clickable" onchange="updateVIPCount(this.value)">
        <option value="5" ${currentVIPCount === 5 ? 'selected' : ''}>Top 5</option>
        <option value="10" ${currentVIPCount === 10 ? 'selected' : ''}>Top 10</option>
        <option value="15" ${currentVIPCount === 15 ? 'selected' : ''}>Top 15</option>
        <option value="20" ${currentVIPCount === 20 ? 'selected' : ''}>Top 20</option>
        <option value="50" ${currentVIPCount === 50 ? 'selected' : ''}>Top 50</option>
      </select>
    </div>
  `;
}

function getGridColumnsForCount(count) {
  if (count <= 5) return 5;
  if (count <= 10) return 5;
  if (count <= 15) return 5;
  if (count <= 20) return 4;
  return 3; // For 50 customers
}

// Main App Logic
document.addEventListener('DOMContentLoaded', () => {
  renderMainDashboard();
});

function renderMainDashboard() {
  const app = document.getElementById('app');
  const genericOpportunities = generateGenericOpportunities();
  
  app.innerHTML = `
    <div class="dashboard-header">
      <h2>Smart Campaign Insights</h2>
      <p>AI-powered opportunities to grow your business</p>
    </div>
    
    <div class="opportunities-section">
      <h3>📊 Business Opportunities</h3>
      <div class="opportunities-grid">
        ${genericOpportunities.map(opp => renderGenericOpportunityCard(opp)).join('')}
      </div>
    </div>
    
    <div class="vip-section">
      <div class="vip-header">
        <h3>👑 VIP Customer Analysis</h3>
        <div class="vip-controls">
          ${renderVIPCountSelector()}
          <button id="generate-vip-btn" class="generate-vip-btn clickable" onclick="generateVIPAnalysis()">
            <span class="btn-icon">⚡</span>
            Analyze Top VIP Customers
          </button>
        </div>
      </div>
      <div id="vip-results" class="vip-results"></div>
    </div>
  `;
}

function generateVIPAnalysis() {
  const vipResults = document.getElementById('vip-results');
  const generateBtn = document.getElementById('generate-vip-btn');
  
  generateBtn.innerHTML = '<span class="btn-icon">⏳</span> Analyzing VIP Data...';
  generateBtn.disabled = true;
  
  setTimeout(() => {
    const vipCustomers = generateVIPCustomers(currentVIPCount);
    const gridColumns = getGridColumnsForCount(currentVIPCount);
    
    vipResults.innerHTML = `
      <div class="vip-analysis-header">
        <h4>Top ${currentVIPCount} VIP Customers (Ranked by LTV)</h4>
        <p>Click on any customer to view detailed profile and send personalized offers</p>
      </div>
      <div class="vip-customers-list" style="grid-template-columns: repeat(${gridColumns}, 1fr);">
        ${vipCustomers.map((customer, index) => renderVIPCustomerCard(customer, index)).join('')}
      </div>
    `;
    
    generateBtn.innerHTML = '<span class="btn-icon">🔄</span> Refresh Analysis';
    generateBtn.disabled = false;
  }, 1500);
}

function updateVIPCount(newCount) {
  currentVIPCount = parseInt(newCount);
  
  // If VIP results are already displayed, update them
  const vipResults = document.getElementById('vip-results');
  if (vipResults.innerHTML.trim() !== '') {
    generateVIPAnalysis();
  }
}

// Campaign Details Functions
function showCampaignDetails(opportunityId) {
  const opportunities = generateGenericOpportunities();
  const opportunity = opportunities.find(opp => opp.id === opportunityId);
  if (!opportunity) return;
  
  const modal = document.createElement('div');
  modal.innerHTML = renderCampaignDetailsModal(opportunity);
  document.body.appendChild(modal);
  
  // Initialize the slider
  setTimeout(() => {
    updateProjections(opportunityId, opportunity.campaignData.minDiscount);
  }, 100);
}

function closeCampaignDetails() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
  }
}

function updateProjections(opportunityId, discountValue) {
  const opportunities = generateGenericOpportunities();
  const opportunity = opportunities.find(opp => opp.id === opportunityId);
  
  // Update discount value display
  const discountValueElement = document.getElementById('discount-value');
  if (discountValueElement) {
    discountValueElement.textContent = `${discountValue}%`;
  }
  
  // Update projections
  const projectionResults = document.getElementById('projection-results');
  if (projectionResults) {
    projectionResults.innerHTML = renderProjectionResults(opportunity, parseInt(discountValue));
  }
}

function launchCampaign() {
  const messageTextarea = document.getElementById('campaign-message');
  const message = messageTextarea.value;
  
  if (!message.trim()) {
    alert('Please adjust the slider to generate your campaign message!');
    return;
  }
  
  // Simulate campaign launch
  const launchBtn = document.querySelector('.launch-btn');
  launchBtn.innerHTML = '🚀 Launching...';
  launchBtn.disabled = true;
  
  setTimeout(() => {
    alert('🎉 Campaign launched successfully! Your promotion is now live.');
    closeCampaignDetails();
  }, 2000);
}

function previewCampaign() {
  const messageTextarea = document.getElementById('campaign-message');
  const message = messageTextarea.value;
  
  if (!message.trim()) {
    alert('Please adjust the slider to generate your campaign message!');
    return;
  }
  
  alert(`Campaign Preview:\n\n${message}\n\nThis message will be sent to your customers via SMS/WhatsApp.`);
}

// VIP Customer Functions
function showCustomerDetails(customerId) {
  const customer = mockData.customers.find(c => c.id === customerId);
  if (!customer) return;
  
  // Add personalized offer to customer object
  const vipCustomers = generateVIPCustomers(50); // Get full list to find this customer
  const vipCustomer = vipCustomers.find(c => c.id === customerId);
  const customerWithOffer = { ...customer, ...vipCustomer };
  
  const modal = document.createElement('div');
  modal.innerHTML = renderCustomerDetailsModal(customerWithOffer);
  document.body.appendChild(modal);
}

function closeCustomerDetails() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
  }
}

function sendVIPOffer(customerId) {
  const customer = mockData.customers.find(c => c.id === customerId);
  const vipCustomers = generateVIPCustomers(50);
  const vipCustomer = vipCustomers.find(c => c.id === customerId);
  
  if (confirm(`Send personalized offer to ${customer.name}?\n\nOffer: ${vipCustomer.personalizedOffer}`)) {
    // Update customer status
    customer.offerStatus = 'sent';
    customer.offerSentDate = new Date();
    customer.redemptionRate = Math.floor(Math.random() * 40) + 10; // Random rate between 10-50%
    
    alert(`✅ Offer sent to ${customer.name} via SMS!`);
    
    // Refresh the VIP analysis to show updated status
    setTimeout(() => {
      generateVIPAnalysis();
    }, 1000);
  }
}

function sendSMS(customerId) {
  const customer = mockData.customers.find(c => c.id === customerId);
  const smsTextarea = document.getElementById(`sms-template-${customerId}`);
  
  if (confirm(`Send SMS to ${customer.name} (${customer.phone})?\n\nMessage preview:\n${smsTextarea.value.substring(0, 100)}...`)) {
    const sendBtn = event.target;
    sendBtn.innerHTML = '✅ Sent!';
    sendBtn.style.background = '#4CAF50';
    
    // Update customer status
    customer.offerStatus = 'sent';
    customer.offerSentDate = new Date();
    customer.redemptionRate = Math.floor(Math.random() * 40) + 10;
    
    setTimeout(() => {
      sendBtn.innerHTML = '📱 Send SMS';
      sendBtn.style.background = '#ffb300';
      closeCustomerDetails();
      generateVIPAnalysis(); // Refresh to show status
    }, 3000);
  }
}

function editSMSTemplate(customerId) {
  const smsTextarea = document.getElementById(`sms-template-${customerId}`);
  smsTextarea.focus();
  smsTextarea.select();
}

function addPersonalTouch(customerId) {
  const vipCustomers = generateVIPCustomers(50);
  const customer = vipCustomers.find(c => c.id === customerId);
  const smsTextarea = document.getElementById(`sms-template-${customerId}`);
  
  // Add personal touch to the message
  const currentMessage = smsTextarea.value;
  const personalizedMessage = currentMessage + `\n\n${customer.personalTouch}`;
  
  smsTextarea.value = personalizedMessage;
  
  // Show a subtle animation
  const magicBtn = event.target;
  magicBtn.innerHTML = '✨ Added!';
  magicBtn.style.background = '#4CAF50';
  
  setTimeout(() => {
    magicBtn.innerHTML = '✨ Magic Touch';
    magicBtn.style.background = '#ffb300';
  }, 2000);
} 