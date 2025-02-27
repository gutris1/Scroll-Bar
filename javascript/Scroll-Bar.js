document.addEventListener('DOMContentLoaded', () => {
  const isFirefox = /firefox/i.test(navigator.userAgent);

  const ScrollBAR = document.createElement('style');
  document.head.appendChild(ScrollBAR);

  var SB = 'var(--primary-400)';
  var SBH = 'var(--primary-600)';
  var SBG = 'var(--input-background-fill)';

  const SBforFirefox = `
    :root, .dark {
      scrollbar-color: ${SB} transparent;
    }
  `;

  const SBwebkit = `
    ::-webkit-scrollbar {
      width: .5rem;
    }
    ::-webkit-scrollbar-thumb {
      background: ${SB} !important;
      border-radius: 30px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${SBH} !important;
    }
    ::-webkit-scrollbar-track {
      background: ${SBG};
      border-radius: 0px;
    }
  `;

  ScrollBAR.innerHTML = isFirefox ? SBforFirefox : SBwebkit;
});
