<%@ page import="vn.edu.nlu.fit.webancay.model.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
    HttpSession currentSession = request.getSession(false);
    if (currentSession == null || currentSession.getAttribute("user") == null) {
        response.sendRedirect("login.jsp");
        return;
    }
    User userObj = (User) currentSession.getAttribute("user");
    pageContext.setAttribute("user", userObj);
%>

<!DOCTYPE html>
<html class="light" lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Chat - Cây Xanh Việt</title>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="fonts/style.css">
    <link rel="stylesheet" href="fonts/account.css">
    <style>
        /* ===== CHAT PAGE STYLES ===== */
        .chat-wrapper {
            background: #f9fafb;
            padding: 2rem 0;
            min-height: calc(100vh - 200px);
        }

        .chat-page-header {
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .chat-page-title {
            font-size: 1.75rem;
            font-weight: bold;
            color: #113222;
            text-align: center;
            margin-bottom: 0.25rem;
        }

        .chat-page-subtitle {
            color: #4b5563;
            font-size: 0.875rem;
            text-align: center;
        }

        /* Chat container layout */
        .chat-layout {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
        }

        @media (max-width: 1023px) {
            .chat-layout { flex-direction: column; }
            .chat-sidebar-col { width: 100%; }
        }

        /* Sidebar */
        .chat-sidebar-col {
            width: 250px;
            flex-shrink: 0;
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,.1);
            padding: 1.5rem;
            height: fit-content;
        }

        .sidebar-nav { display: flex; flex-direction: column; gap: 0.25rem; }

        .sidebar-nav-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            text-decoration: none;
            color: #374151;
            font-size: 0.9rem;
            transition: background .15s;
        }

        .sidebar-nav-item:hover { background: #f3f4f6; }
        .sidebar-nav-item.active { background: #e8f5e9; color: #166534; font-weight: 600; }
        .sidebar-nav-item .material-icons { font-size: 1.2rem; }
        .sidebar-nav-item .material-icons.blue { color: #3b82f6; }
        .sidebar-nav-item .material-icons.red  { color: #ef4444; }
        .sidebar-nav-item .material-icons.green{ color: #22c55e; }

        /* Main chat box */
        .chat-main-col {
            flex: 1;
            min-width: 0;
        }

        .chat-box {
            background: white;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,.1);
            display: flex;
            flex-direction: column;
            height: 600px;
        }

        /* Chat header */
        .chat-box-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 1.25rem;
            border-bottom: 1px solid #e5e7eb;
            background: #f0fdf4;
            border-radius: 0.75rem 0.75rem 0 0;
        }

        .chat-shop-avatar {
            width: 44px;
            height: 44px;
            background: #166534;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 1.1rem;
            flex-shrink: 0;
        }

        .chat-shop-info { flex: 1; }
        .chat-shop-name { font-weight: 700; color: #113222; font-size: 0.95rem; }
        .chat-shop-status { font-size: 0.78rem; color: #22c55e; display: flex; align-items: center; gap: 0.3rem; }
        .status-dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; }

        /* Messages area */
        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            background: #fafafa;
        }

        .chat-messages::-webkit-scrollbar { width: 5px; }
        .chat-messages::-webkit-scrollbar-track { background: transparent; }
        .chat-messages::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }

        /* Message bubbles */
        .msg-row {
            display: flex;
            gap: 0.5rem;
            align-items: flex-end;
        }

        .msg-row.msg-user  { flex-direction: row-reverse; }
        .msg-row.msg-shop  { flex-direction: row; }

        .msg-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.75rem;
            color: white;
        }

        .msg-avatar.shop-av { background: #166534; }
        .msg-avatar.user-av { background: #3b82f6; }

        .msg-bubble-wrap { display: flex; flex-direction: column; max-width: 65%; }
        .msg-row.msg-user .msg-bubble-wrap { align-items: flex-end; }
        .msg-row.msg-shop .msg-bubble-wrap { align-items: flex-start; }

        .msg-bubble {
            padding: 0.6rem 0.9rem;
            border-radius: 1rem;
            font-size: 0.9rem;
            line-height: 1.5;
            word-break: break-word;
        }

        .msg-row.msg-user .msg-bubble {
            background: #166534;
            color: white;
            border-bottom-right-radius: 0.25rem;
        }

        .msg-row.msg-shop .msg-bubble {
            background: #e5e7eb;
            color: #111827;
            border-bottom-left-radius: 0.25rem;
        }

        .msg-time {
            font-size: 0.7rem;
            color: #9ca3af;
            margin-top: 0.2rem;
            padding: 0 0.2rem;
        }

        /* Empty state */
        .chat-empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #9ca3af;
            gap: 0.5rem;
        }

        .chat-empty .material-icons { font-size: 3rem; color: #d1d5db; }

        /* Typing indicator */
        .typing-indicator {
            display: none;
            align-items: center;
            gap: 0.5rem;
            padding: 0 1.25rem 0.5rem;
        }

        .typing-dots span {
            width: 7px; height: 7px;
            background: #9ca3af;
            border-radius: 50%;
            display: inline-block;
            animation: bounce 1.2s infinite;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40%            { transform: translateY(-6px); }
        }

        /* Input area */
        .chat-input-area {
            padding: 0.875rem 1.25rem;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 0.625rem;
            align-items: flex-end;
            background: white;
            border-radius: 0 0 0.75rem 0.75rem;
        }

        .chat-textarea {
            flex: 1;
            border: 1px solid #d1d5db;
            border-radius: 1.25rem;
            padding: 0.625rem 1rem;
            font-family: inherit;
            font-size: 0.9rem;
            resize: none;
            outline: none;
            max-height: 120px;
            min-height: 42px;
            line-height: 1.5;
            transition: border-color .2s;
        }

        .chat-textarea:focus { border-color: #166534; }

        .chat-send-btn {
            width: 42px;
            height: 42px;
            border: none;
            border-radius: 50%;
            background: #166534;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background .2s, transform .1s;
        }

        .chat-send-btn:hover   { background: #14532d; }
        .chat-send-btn:active  { transform: scale(0.93); }
        .chat-send-btn:disabled{ background: #d1d5db; cursor: not-allowed; }

        /* Alert */
        .chat-alert {
            padding: 0.625rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
            display: none;
        }

        .chat-alert.error   { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
        .chat-alert.success { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
    </style>
</head>
<body class="light">
<div class="layout-container">
    <%-- ===== HEADER (copy từ account.jsp) ===== --%>
    <header class="sticky-header">
        <div class="header-top">
            <div class="container header-top-content">
                <div class="header-info">
                    <div class="header-info-item">
                        <span class="material-symbols-outlined">schedule</span>
                        <span>08:30 - 22:00</span>
                    </div>
                    <div class="header-info-item hidden-sm">
                        <span class="material-symbols-outlined">call</span>
                        <span>0838 369 639 - 09 6688 9393</span>
                    </div>
                </div>
                <div class="header-actions">
                    <a class="favorite-link" href="favorites.jsp">
                        <span class="material-symbols-outlined">favorite</span>
                        <div class="favorite-count">0</div>
                    </a>
                    <c:choose>
                        <c:when test="${not empty user}">
                            <div class="user-menu" id="user-menu">
                                <div class="user-info">
                                    <div class="user-avatar" id="user-avatar">${user.firstName.charAt(0)}</div>
                                    <span class="user-name" id="user-name">${user.lastName} ${user.firstName}</span>
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                                <div class="user-dropdown">
                                    <a href="account.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">person</span><span>Tài khoản của tôi</span>
                                    </a>
                                    <a href="orders.jsp" class="user-dropdown-item">
                                        <span class="material-symbols-outlined">shopping_bag</span><span>Đơn mua</span>
                                    </a>
                                    <a href="logout" class="user-dropdown-item" id="logout-btn">
                                        <span class="material-symbols-outlined">logout</span><span>Đăng xuất</span>
                                    </a>
                                </div>
                            </div>
                        </c:when>
                        <c:otherwise>
                            <a class="login-link" href="login.jsp" id="login-link">Đăng nhập</a>
                        </c:otherwise>
                    </c:choose>
                </div>
            </div>
        </div>
        <div class="header-main">
            <div class="container header-main-content">
                <div class="logo-container">
                    <a class="logo" href="index.jsp">
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5zm-3.5-2.5a5.5 5.5 0 0 0 7-4.76"/>
                        </svg>
                        <span class="logo-text">Cây Xanh Việt</span>
                    </a>
                </div>
                <div class="header-buttons">
                    <a class="header-button" id="cart-button" href="cart.jsp">
                        <span id="cart-total">0đ</span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <%-- ===== NỘI DUNG CHÍNH ===== --%>
    <div class="chat-wrapper">
        <div class="container">
            <div class="chat-page-header">
                <h1 class="chat-page-title">Liên Hệ Người Bán</h1>
                <p class="chat-page-subtitle">Nhắn tin trực tiếp với Cây Xanh Việt</p>
            </div>

            <div id="chat-alert" class="chat-alert"></div>

            <div class="chat-layout">
                <%-- Sidebar --%>
                <aside class="chat-sidebar-col">
                    <nav class="sidebar-nav">
                        <a class="sidebar-nav-item" href="account.jsp">
                            <span class="material-icons blue">person_outline</span>
                            <span>Tài Khoản Của Tôi</span>
                        </a>
                        <a class="sidebar-nav-item" href="orders.jsp">
                            <span class="material-icons red">receipt_long</span>
                            <span>Đơn Mua</span>
                        </a>
                        <a class="sidebar-nav-item active" href="chat">
                            <span class="material-icons green">chat_bubble_outline</span>
                            <span>Chat Với Shop</span>
                        </a>
                    </nav>
                </aside>

                <%-- Chat box --%>
                <div class="chat-main-col">
                    <div class="chat-box">
                        <%-- Header shop --%>
                        <div class="chat-box-header">
                            <div class="chat-shop-avatar">CX</div>
                            <div class="chat-shop-info">
                                <div class="chat-shop-name">Cây Xanh Việt</div>
                                <div class="chat-shop-status">
                                    <div class="status-dot"></div>
                                    Đang hoạt động
                                </div>
                            </div>
                            <span class="material-icons" style="color:#166534;font-size:1.4rem;">storefront</span>
                        </div>

                        <%-- Messages area --%>
                        <div class="chat-messages" id="chat-messages">
                            <div class="chat-empty" id="chat-empty">
                                <span class="material-icons">chat_bubble_outline</span>
                                <p>Chưa có tin nhắn nào. Hãy bắt đầu cuộc trò chuyện!</p>
                            </div>
                        </div>

                        <%-- Typing indicator --%>
                        <div class="typing-indicator" id="typing-indicator">
                            <div class="msg-avatar shop-av" style="width:24px;height:24px;font-size:.65rem">CX</div>
                            <div class="typing-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>

                        <%-- Input --%>
                        <div class="chat-input-area">
                            <textarea id="chat-input" class="chat-textarea" rows="1"
                                      placeholder="Nhập tin nhắn..." maxlength="1000"></textarea>
                            <button id="chat-send-btn" class="chat-send-btn" title="Gửi (Enter)">
                                <span class="material-icons" style="font-size:1.2rem">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%-- ===== FOOTER ===== --%>
    <footer class="footer">
        <div class="container footer-main">
            <div class="footer-grid">
                <div class="footer-column">
                    <a class="footer-logo" href="index.jsp">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                            <path d="M12 15a7.99 7.99 0 0 1-8-8c0-2.21.9-4.21 2.35-5.65A8.003 8.003 0 0 1 12 2a8.003 8.003 0 0 1 5.65 2.35C19.1 5.79 20 7.79 20 10a7.99 7.99 0 0 1-8 5z"/>
                        </svg>
                        <span>Cây Xanh Việt</span>
                    </a>
                    <p class="footer-description">Chúng tôi mong muốn mang đến không gian sống xanh cho mọi gia đình.</p>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">LIÊN HỆ</h4>
                    <ul class="footer-contact">
                        <li class="footer-contact-item">Hotline: 09 6688 9393</li>
                        <li class="footer-contact-item">Email: hotro@cayxanhviet.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-content">
                <p>Copyright 2025 © MOWGARDEN</p>
            </div>
        </div>
    </footer>
</div>

<script>
    // ─── Config ─────────────────────────────────────────────────────────────────
    const CTX = '<%= request.getContextPath() %>';
    const USER_FIRST = '<%= userObj.getFirstName().charAt(0) %>';
    const POLL_INTERVAL = 5000; // polling mỗi 5 giây

    // ─── DOM refs ────────────────────────────────────────────────────────────────
    const msgContainer = document.getElementById('chat-messages');
    const chatEmpty    = document.getElementById('chat-empty');
    const inputEl      = document.getElementById('chat-input');
    const sendBtn      = document.getElementById('chat-send-btn');
    const alertEl      = document.getElementById('chat-alert');
    const typingEl     = document.getElementById('typing-indicator');

    // ─── Helpers ─────────────────────────────────────────────────────────────────
    function showAlert(msg, type = 'error') {
        alertEl.textContent = msg;
        alertEl.className = 'chat-alert ' + type;
        alertEl.style.display = 'block';
        setTimeout(() => { alertEl.style.display = 'none'; }, 4000);
    }

    function formatTime(dateStr) {
        const d = new Date(dateStr);
        if (isNaN(d)) return '';
        return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }

    function scrollToBottom() {
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function renderMessage(msg) {
        const isUser = msg.sender === 'user';
        const row = document.createElement('div');
        row.className = 'msg-row ' + (isUser ? 'msg-user' : 'msg-shop');
        row.dataset.id = msg.id;

        const avatarLabel = isUser ? USER_FIRST : 'CX';
        const avatarClass = isUser ? 'user-av' : 'shop-av';

        row.innerHTML = `
            <div class="msg-avatar ${avatarClass}">${avatarLabel}</div>
            <div class="msg-bubble-wrap">
                <div class="msg-bubble">${escapeHtml(msg.content)}</div>
                <div class="msg-time">${formatTime(msg.createdAt)}</div>
            </div>`;
        return row;
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '<br>');
    }

    // ─── Load messages (polling) ──────────────────────────────────────────────────
    let lastMessageId = 0;

    function loadMessages() {
        fetch(CTX + '/chat?api=messages', { credentials: 'same-origin' })
            .then(r => r.json())
            .then(data => {
                if (!data.success) return;
                const messages = data.messages || [];

                if (messages.length === 0) {
                    chatEmpty.style.display = 'flex';
                    return;
                }

                chatEmpty.style.display = 'none';

                // Chỉ render các tin mới
                const newMessages = messages.filter(m => m.id > lastMessageId);
                if (newMessages.length === 0) return;

                newMessages.forEach(msg => {
                    msgContainer.appendChild(renderMessage(msg));
                    lastMessageId = Math.max(lastMessageId, msg.id);
                });

                scrollToBottom();
            })
            .catch(() => { /* silent fail khi mạng yếu */ });
    }

    // Load ngay lần đầu
    loadMessages();

    // Polling
    setInterval(loadMessages, POLL_INTERVAL);

    // ─── Gửi tin nhắn ───────────────────────────────────────────────────────────
    function sendMessage() {
        const content = inputEl.value.trim();
        if (!content) return;

        sendBtn.disabled = true;

        fetch(CTX + '/chat', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    inputEl.value = '';
                    inputEl.style.height = 'auto';
                    // Load lại ngay để hiện tin vừa gửi
                    loadMessages();
                } else {
                    showAlert(data.message || 'Gửi thất bại');
                }
            })
            .catch(() => showAlert('Lỗi kết nối, vui lòng thử lại'))
            .finally(() => { sendBtn.disabled = false; });
    }

    // Nút gửi
    sendBtn.addEventListener('click', sendMessage);

    // Enter gửi, Shift+Enter xuống dòng
    inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Auto-resize textarea
    inputEl.addEventListener('input', () => {
        inputEl.style.height = 'auto';
        inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
    });
</script>
</body>
</html>
