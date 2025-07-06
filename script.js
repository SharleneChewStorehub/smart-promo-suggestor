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
      transactions: [
        { date: "2024-12-31", amount: 17.00, items: ["Nasi Lemak", "Milo Ais"], voucher: null, cashback: { claimed: 0.85, redeemed: 0 } },
        { date: "2024-12-24", amount: 25.50, items: ["Nasi Lemak", "Satay (10 sticks)"], voucher: "XMAS15", cashback: { claimed: 1.28, redeemed: 2.10 } }
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

// Generate 3 Generic Opportunity Highlights
function generateGenericOpportunities() {
  const opportunities = [];
  
  // 1. Revenue Opportunity - Slow Day Boost
  const slowestDay = Object.entries(mockData.salesByDay)
    .sort(([,a], [,b]) => a - b)[0];
  
  opportunities.push({
    type: "Revenue Growth",
    icon: "📈",
    title: `Boost ${slowestDay[0]} Sales`,
    description: `${slowestDay[0]} generates RM ${slowestDay[1].toFixed(2)} vs RM ${Math.max(...Object.values(mockData.salesByDay)).toFixed(2)} on your best day. A targeted promotion could bridge this gap.`,
    impact: `+RM ${((Math.max(...Object.values(mockData.salesByDay)) - slowestDay[1]) * 0.3).toFixed(2)} potential weekly revenue`,
    action: "Launch 'Wonderful Wednesday 15% Off' campaign",
    color: "#4CAF50"
  });
  
  // 2. Basket Size Opportunity
  const highMarginItems = mockData.products.filter(p => p.margin > 0.65);
  const avgBasket = mockData.averageBasketSize;
  
  opportunities.push({
    type: "Basket Size Growth",
    icon: "🛒",
    title: "Increase Average Order Value",
    description: `Current average basket: RM ${avgBasket.toFixed(2)}. Bundle high-margin items like ${highMarginItems.slice(0,2).map(p => p.name).join(' + ')} to boost AOV.`,
    impact: `+RM ${(avgBasket * 0.25).toFixed(2)} per transaction (25% increase)`,
    action: "Create 'Perfect Pair' combo deals",
    color: "#2196F3"
  });
  
  // 3. Customer Retention - Cashback Program
  const cashbackData = mockData.cashbackProgram;
  const unredeemedCashback = cashbackData.totalClaimed - cashbackData.totalRedeemed;
  
  opportunities.push({
    type: "Customer Retention",
    icon: "🎯",
    title: "Activate Dormant Cashback",
    description: `RM ${unredeemedCashback.toFixed(2)} in unclaimed cashback from ${cashbackData.activeUsers} customers. Remind them to redeem and drive repeat visits.`,
    impact: `${Math.round(unredeemedCashback / avgBasket)} potential return visits`,
    action: "Send 'Use Your Cashback' reminder campaign",
    color: "#FF9800"
  });
  
  return opportunities;
}

// Generate VIP Customer Analysis
function generateVIPCustomers() {
  return mockData.customers
    .map(customer => {
      const avgSpend = customer.totalSpent / customer.visits;
      const ltv = customer.totalSpent; // Simplified LTV
      const daysSinceLastVisit = Math.floor((new Date() - new Date(customer.lastVisit)) / (1000 * 60 * 60 * 24));
      
      return {
        ...customer,
        avgSpend: avgSpend,
        ltv: ltv,
        daysSinceLastVisit: daysSinceLastVisit,
        score: (ltv * 0.4) + (customer.visits * 0.3) + (avgSpend * 0.3) // Weighted score
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

// UI Rendering Functions
function renderGenericOpportunityCard(opportunity) {
  return `
    <div class="opportunity-card generic-card" style="border-left-color: ${opportunity.color}">
      <div class="card-header">
        <div class="opportunity-icon">${opportunity.icon}</div>
        <div class="opportunity-info">
          <h3>${opportunity.title}</h3>
          <span class="opportunity-type">${opportunity.type}</span>
        </div>
      </div>
      <div class="card-content">
        <p>${opportunity.description}</p>
        <div class="impact-section">
          <span class="impact-label">Business Impact:</span>
          <span class="impact-value">${opportunity.impact}</span>
        </div>
        <button class="action-btn" style="background-color: ${opportunity.color}">${opportunity.action}</button>
      </div>
    </div>
  `;
}

function renderVIPCustomerCard(customer) {
  return `
    <div class="vip-customer-card" onclick="showCustomerDetails(${customer.id})">
      <div class="vip-header">
        <h4 class="customer-name">${customer.name}</h4>
        <span class="vip-badge">VIP</span>
      </div>
      <div class="vip-stats">
        <div class="stat-item">
          <span class="stat-label">Total Spent</span>
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
      <div class="favorite-items">
        <span class="favorites-label">Favorites:</span>
        <span class="favorites-text">${customer.favoriteItems.join(', ')}</span>
      </div>
    </div>
  `;
}

function renderCustomerDetailsModal(customer) {
  const totalCashbackClaimed = customer.transactions.reduce((sum, t) => sum + t.cashback.claimed, 0);
  const totalCashbackRedeemed = customer.transactions.reduce((sum, t) => sum + t.cashback.redeemed, 0);
  
  return `
    <div class="modal-overlay" onclick="closeCustomerDetails()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>${customer.name} - Transaction History</h3>
          <button class="close-btn" onclick="closeCustomerDetails()">×</button>
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
              <div class="summary-item">
                <span class="summary-label">Available Cashback</span>
                <span class="summary-value highlight">RM ${(totalCashbackClaimed - totalCashbackRedeemed).toFixed(2)}</span>
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
                    <span class="detail-value">
                      Earned: RM ${transaction.cashback.claimed.toFixed(2)}
                      ${transaction.cashback.redeemed > 0 ? ` | Redeemed: RM ${transaction.cashback.redeemed.toFixed(2)}` : ''}
                    </span>
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
        <button id="generate-vip-btn" class="generate-vip-btn" onclick="generateVIPAnalysis()">
          <span class="btn-icon">⚡</span>
          Analyze Top VIP Customers
        </button>
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
    const vipCustomers = generateVIPCustomers();
    
    vipResults.innerHTML = `
      <div class="vip-analysis-header">
        <h4>Top 5 VIP Customers</h4>
        <p>Click on any customer to view detailed transaction history</p>
      </div>
      <div class="vip-customers-grid">
        ${vipCustomers.map(customer => renderVIPCustomerCard(customer)).join('')}
      </div>
    `;
    
    generateBtn.innerHTML = '<span class="btn-icon">🔄</span> Refresh Analysis';
    generateBtn.disabled = false;
  }, 1500);
}

function showCustomerDetails(customerId) {
  const customer = mockData.customers.find(c => c.id === customerId);
  if (!customer) return;
  
  const modal = document.createElement('div');
  modal.innerHTML = renderCustomerDetailsModal(customer);
  document.body.appendChild(modal);
}

function closeCustomerDetails() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
  }
} 