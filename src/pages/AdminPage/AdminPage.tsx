import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="comic-admin">
      <aside className="comic-sidebar">
        <div className="comic-logo">ADMIN!</div>
        <nav>
          <a href="#" className="nav-item active">
            DASHBOARD
          </a>
          <a href="#" className="nav-item">
            USERS
          </a>
          <a href="#" className="nav-item">
            REPORTS
          </a>
          <a href="#" className="nav-item">
            SETTINGS
          </a>
        </nav>
        <div className="sidebar-footer">POW! v.1.0</div>
      </aside>

      <main className="comic-main">
        <header className="comic-header">
          <h1>WELCOME BACK, BOSS!</h1>
          <div className="user-badge">HERO #1</div>
        </header>

        <section className="stats-grid">
          <div className="comic-card yellow">
            <h3>ACTIVE USERS</h3>
            <p className="stat-value">1,240</p>
          </div>
          <div className="comic-card red">
            <h3>REVENUE</h3>
            <p className="stat-value">$50,000</p>
          </div>
          <div className="comic-card blue">
            <h3>NEW MESSAGES</h3>
            <p className="stat-value">12</p>
          </div>
        </section>

        <section className="comic-panel table-panel">
          <h2>RECENT MISSIONS (TASKS)</h2>
          <table className="comic-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>MISSION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Fix CSS Bugs</td>
                <td>
                  <span className="status-tag">DONE</span>
                </td>
                <td>
                  <button className="comic-btn">VIEW</button>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Save the World</td>
                <td>
                  <span className="status-tag active">IN PROGRESS</span>
                </td>
                <td>
                  <button className="comic-btn">VIEW</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
