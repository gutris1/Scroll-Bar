onUiLoaded(function () {
  const isFirefox = /firefox/i.test(navigator.userAgent);

  const ScrollBAR = document.createElement('style');
  document.head.appendChild(ScrollBAR);

  var SB = 'var(--button-secondary-text-color)';
  var SBG = 'var(--input-background-fill)';
  var SBH = 'var(--button-secondary-text-color-hover)';

  const SBforFirefox = `
    :root, .dark {
      scrollbar-color: ${SB} ${SBG};
      scrollbar-width: thin;
    }
  `;

  const SBwebkit = `
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${SB};
      border-radius: 30px;
      border: 1px solid ${SBG};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${SBH};
    }

    ::-webkit-scrollbar-track {
      background: ${SBG};
      border-radius: 0px;
    }
  `;

  ScrollBAR.innerHTML = isFirefox ? SBforFirefox : SBwebkit;
});
