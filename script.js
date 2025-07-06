// script.js

document.addEventListener('DOMContentLoaded', () => {
  renderLauncherUI();
});

function renderLauncherUI() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="card" style="text-align:center;">
      <h2>🚀 Find Opportunities & Generate Campaigns</h2>
      <button id="generate-btn" style="padding: 12px 32px; font-size: 1.1rem; background: #ffb300; color: #23272b; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Generate</button>
    </div>
    <div id="results"></div>
  `;
  document.getElementById('generate-btn').onclick = handleGenerate;
}

function handleGenerate() {
  // Placeholder: will generate and display campaign cards here
  document.getElementById('results').innerHTML = '<div class="card">[Campaign results will appear here]</div>';
} 