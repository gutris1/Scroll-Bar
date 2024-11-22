onUiLoaded(function () {
  const isFirefox = /firefox/i.test(navigator.userAgent);

  const ScrollBAR = document.createElement('style');
  document.head.appendChild(ScrollBAR);

  var SB = 'var(--button-secondary-text-color)';
  var SBG = 'var(--input-background-fill)';
  var SBH = 'var(--button-secondary-text-color-hover)';

  const SBforFirefox = `
    :root, .dark {
      scrollbar-color: ${SB} transparent;
    }
  `;

  const SBwebkit = `
    ::-webkit-scrollbar {
      width: .4rem
    }

    ::-webkit-scrollbar-thumb {
      background: ${SB};
      border-radius: 30px;
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
