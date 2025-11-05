.sidebar {
  width: 260px;
  height: 100vh;
  background: linear-gradient(180deg, #1e3a8a, #2563eb);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  position: fixed;
  left: 0;
  top: 0;
}

.logo-area {
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

/* Botões principais */
.menu-item {
  margin-bottom: 8px;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  width: 100%;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.3s;
}

.menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-btn i {
  margin-right: 8px;
}

.arrow {
  margin-left: auto;
  transition: transform 0.3s;
}

/* Submenus */
.submenu {
  list-style: none;
  background: rgba(255, 255, 255, 0.08);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.submenu li a {
  display: block;
  padding: 10px 35px;
  text-decoration: none;
  color: #f0f4ff;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.submenu li a:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* Ativo */
.menu-item.active .submenu {
  max-height: 500px;
}
.menu-item.active .arrow {
  transform: rotate(180deg);
}

/* Logout */
.logout-area {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.logout-btn {
  width: 100%;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 10px;
  transition: background 0.3s;
}
.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* Scrollbar */
.menu::-webkit-scrollbar {
  width: 6px;
}
.menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
