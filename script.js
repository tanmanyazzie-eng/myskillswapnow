* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f6f8fb;
  color: #18212f;
}
.topbar {
  padding: 18px 20px;
  background: white;
  border-bottom: 1px solid #e4e8ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}
.brand {
  font-size: 22px;
  font-weight: 800;
}
.sub {
  color: #617086;
  font-size: 14px;
  margin-top: 4px;
}
.ghost {
  border: 1px solid #cfd8e3;
  background: white;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
}
.hero {
  padding: 24px 20px 6px;
}
.hero h2 {
  margin: 0 0 8px;
  font-size: 28px;
}
.hero p {
  margin: 0;
  color: #617086;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding: 20px;
}
.tile {
  background: white;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 4px 18px rgba(31, 51, 84, 0.08);
}
.tile h3 {
  margin: 0 0 8px;
  font-size: 18px;
}
.tile p {
  margin: 0;
  color: #617086;
  line-height: 1.45;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(14, 22, 36, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 999;
}
.hidden { display: none; }
.sheet {
  width: min(840px, 100%);
  max-height: 92vh;
  overflow: auto;
  background: white;
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 18px 50px rgba(14, 22, 36, 0.35);
}
.badge {
  display: inline-block;
  background: #e9f2ff;
  color: #1d4ed8;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 12px;
}
h1 {
  margin: 0 0 8px;
  font-size: 32px;
}
.lead {
  margin: 0 0 18px;
  color: #617086;
  line-height: 1.5;
}
.card-list {
  display: grid;
  gap: 12px;
  margin-bottom: 18px;
}
.card {
  border: 1px solid #e6ebf2;
  border-radius: 16px;
  padding: 14px 16px;
  background: #fbfcfe;
}
.card h3 {
  margin: 0 0 6px;
  font-size: 18px;
}
.card p {
  margin: 0;
  line-height: 1.5;
  color: #425268;
}
.checkline {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 14px 0;
  line-height: 1.45;
}
.checkline input {
  margin-top: 4px;
  transform: scale(1.25);
}
.actions {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
}
#continueBtn {
  border: none;
  background: #1d4ed8;
  color: white;
  padding: 14px 18px;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
}
#continueBtn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
