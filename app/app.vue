<template>
  <div class="site-frame">
    <header class="site-header" aria-label="網站標頭">
      <a class="brand" href="/" aria-label="日出伺服器首頁">
        <img
          class="brand__icon"
          src="/server-icon.webp"
          alt=""
          width="40"
          height="40"
        >
        <span class="brand__name">日出伺服器</span>
      </a>

      <div class="system-state" role="status" aria-label="目前維護中">
        <span class="system-state__light" aria-hidden="true" />
        <span>維護模式</span>
      </div>
    </header>

    <main class="maintenance">
      <section class="maintenance__content" aria-labelledby="maintenance-title">
        <div class="server-mark" aria-hidden="true">
          <img
            src="/server-icon.webp"
            alt=""
            width="112"
            height="112"
          >
          <span class="server-mark__accent" />
        </div>

        <div class="status-label">
          <span>最新狀態</span>
          <span class="status-label__rule" aria-hidden="true" />
          <span>轉交專業店家維修 (07/13)</span>
        </div>

        <h1 id="maintenance-title" class="maintenance-title">
          <span class="maintenance-title__line">伺服器硬體維護中</span>
          <span class="maintenance-title__line maintenance-title__line--muted">
            目前不開放
          </span>
        </h1>

        <p class="maintenance__message">
          維護進度與重新開放消息將於 Discord 更新。
        </p>

        <a
          class="discord-link"
          href="https://discord.gg/7f27SJr7Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="discord-link__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.54 5.34A17 17 0 0 0 15.32 4l-.53 1.08a15.42 15.42 0 0 0-5.58 0L8.68 4a17.07 17.07 0 0 0-4.23 1.35C1.78 9.32 1.06 13.2 1.42 17a17.2 17.2 0 0 0 5.18 2.61l1.25-1.7a11 11 0 0 1-1.96-.95l.48-.37a12.25 12.25 0 0 0 11.25 0l.49.37a12.7 12.7 0 0 1-1.97.95l1.25 1.7A17.1 17.1 0 0 0 22.57 17c.43-4.4-.73-8.24-3.03-11.66ZM8.61 14.65c-1.04 0-1.9-.96-1.9-2.14 0-1.18.84-2.14 1.9-2.14 1.07 0 1.93.97 1.91 2.14 0 1.18-.84 2.14-1.91 2.14Zm6.78 0c-1.05 0-1.9-.96-1.9-2.14 0-1.18.83-2.14 1.9-2.14 1.06 0 1.92.97 1.9 2.14 0 1.18-.84 2.14-1.9 2.14Z" />
          </svg>
          <span>加入Discord取得最新進度</span>
          <span class="discord-link__arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <span class="maintenance__code" aria-hidden="true">SYS / 01</span>
    </main>

    <footer class="site-footer">
      <span>日出伺服器</span>
      <span class="site-footer__status">MAINTENANCE IN PROGRESS</span>
    </footer>
  </div>
</template>
