// Digital Divide Records — home page: promo banner, countdown & roster
(function () {
  "use strict";

  var pad = function (n) { return String(n).padStart(2, "0"); };
  var fmtDate = function (d) {
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };

  // Returns the phase that is currently "live" (its date has passed) and the
  // next upcoming phase we should count down towards.
  function getPhaseState(phases, now) {
    var liveIndex = -1;
    for (var i = 0; i < phases.length; i++) {
      if (now >= phases[i].date) liveIndex = i;
    }
    var nextIndex = liveIndex + 1;
    if (nextIndex >= phases.length) {
      return { liveIndex: phases.length - 1, nextIndex: null, released: true };
    }
    return { liveIndex: liveIndex, nextIndex: nextIndex, released: false };
  }

  function diffParts(target, now) {
    var s = Math.max(0, Math.floor((target - now) / 1000));
    var days = Math.floor(s / 86400); s -= days * 86400;
    var hours = Math.floor(s / 3600); s -= hours * 3600;
    var mins = Math.floor(s / 60);
    var secs = s - mins * 60;
    return { days: days, hours: hours, mins: mins, secs: secs };
  }

  // ---------- Promo banner ----------
  var banner = document.getElementById("promoBanner");
  if (banner) {
    var phases = UPCOMING_RELEASE.phases.map(function (p) {
      return { key: p.key, label: p.label, icon: p.icon, note: p.note, date: new Date(p.date) };
    });

    document.getElementById("bannerCover").src = UPCOMING_RELEASE.cover;
    document.getElementById("bannerCover").alt = UPCOMING_RELEASE.artist + " - " + UPCOMING_RELEASE.title + " Cover Art";
    document.getElementById("alertText").textContent = UPCOMING_RELEASE.alert;
    document.getElementById("bannerArtist").textContent = UPCOMING_RELEASE.artist;
    document.getElementById("bannerTitle").textContent = UPCOMING_RELEASE.title;

    var ticker = document.getElementById("bannerTicker");
    var chunk = UPCOMING_RELEASE.artist + " · " + UPCOMING_RELEASE.title + " · ";
    ticker.textContent = chunk + chunk + chunk + chunk;

    var statusLabelEl = document.getElementById("statusLabel");
    var statusBadgeEl = document.getElementById("statusBadge");
    var countdownEl = document.getElementById("countdown");
    var timelineEl = document.getElementById("phaseTimeline");

    function renderTimeline(state) {
      timelineEl.innerHTML = "";
      phases.forEach(function (p, i) {
        var isLive = i === state.liveIndex && !state.released;
        var isDone = i < state.liveIndex || state.released;
        var isNext = i === state.nextIndex;
        var chip = document.createElement("div");
        chip.className = "phase-chip" + (isLive ? " phase-live" : "") + (isNext ? " phase-next" : "") + (isDone ? " phase-done" : "");
        chip.innerHTML =
          '<span class="phase-icon">' + p.icon + "</span>" +
          '<div class="phase-text">' +
            '<div class="phase-label">' + p.label +
              (isLive ? " · Live" : "") + (isNext && !isLive ? " · Next" : "") +
            "</div>" +
            '<div class="phase-date">' + fmtDate(p.date) + "</div>" +
          "</div>" +
          (isDone ? '<span class="phase-check">✓</span>' : "");
        timelineEl.appendChild(chip);
      });
    }

    function tick() {
      var now = new Date();
      var state = getPhaseState(phases, now);
      var target = state.nextIndex != null ? phases[state.nextIndex].date : phases[phases.length - 1].date;
      var parts = diffParts(target, now);

      var statusLabel = state.released ? "Released"
        : state.nextIndex === 0 ? "Pre-Order Soon"
        : state.nextIndex === 1 ? "Pre-Order Live"
        : state.nextIndex === 2 ? "Pre-Release Live"
        : "Announced";
      var accent = state.released ? "#1dd1a1" : state.nextIndex === 0 ? "#ffb74d" : "#00F5FF";

      banner.style.setProperty("--accent", accent);
      statusLabelEl.textContent = statusLabel;
      countdownEl.innerHTML =
        '<div class="count-unit"><span class="count-num">' + pad(parts.days) + '</span><span class="count-label">Days</span></div>' +
        '<div class="count-unit"><span class="count-num">' + pad(parts.hours) + '</span><span class="count-label">Hours</span></div>' +
        '<div class="count-unit"><span class="count-num">' + pad(parts.mins) + '</span><span class="count-label">Mins</span></div>' +
        '<div class="count-unit"><span class="count-num">' + pad(parts.secs) + '</span><span class="count-label">Secs</span></div>';
      renderTimeline(state);
    }

    tick();
    setInterval(tick, 1000);
  }

  // ---------- Roster ----------
  var rosterEl = document.getElementById("artists");
  if (rosterEl) {
    var totalReleases = ARTISTS.reduce(function (n, a) { return n + a.releases.length; }, 0);
    document.getElementById("rosterCount").textContent =
      ARTISTS.length + " Artists · " + totalReleases + " Releases";

    function escapeHtml(s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }

    var html = "";
    ARTISTS.forEach(function (artist, index) {
      var slug = artist.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      html +=
        '<section class="artist-section reveal" id="' + slug + '">' +
          '<div class="artist-intro">' +
            '<span class="ghost-name" aria-hidden="true">' + escapeHtml(artist.name) + "</span>" +
            '<div class="artist-intro-inner">' +
              '<div class="artist-index-row">' +
                '<span class="artist-index">' + pad(index + 1) + "</span>" +
                '<span class="index-rule"></span>' +
                '<span class="artist-tag">Artist</span>' +
              "</div>" +
              "<h2 class=\"artist-name\">" + escapeHtml(artist.name) + "</h2>" +
              (artist.aka ? '<p class="artist-aka">aka ' + escapeHtml(artist.aka) + "</p>" : "") +
              '<p class="artist-bio">' + escapeHtml(artist.bio) + "</p>" +
              '<div class="artist-meta">' +
              '<span class="artist-count">' + artist.releases.length + (artist.releases.length !== 1 ? " Releases" : " Release") + "</span>" +
              //JAVASCRIPT INJECTED ARTIST LINK
              //'<a class="artist-link" href="' + artist.link + '" target="_blank" rel="noopener noreferrer">View Artist ↗</a>' +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div class="release-grid">';
      artist.releases.forEach(function (release) {
        html +=
            '<div class="release-card">' +
              '<div class="cover-tilt">' +
                '<div class="cover-wrap">' +
                  '<img src="' + release.cover + '" alt="' + escapeHtml(artist.name) + " - " + escapeHtml(release.title) + ' Cover Art" loading="lazy">' +
                  '<div class="cover-glow"></div>' +
                "</div>" +
              "</div>" +
              '<div class="card-meta">' +
                '<h3 class="card-title" title="' + escapeHtml(release.title) + '">' + escapeHtml(release.title) + "</h3>" +
                '<div class="card-catalog"><span>' + release.catalog + "</span><span class=\"dot\">•</span><span>" + release.date + "</span></div>" +
                '<div class="platform-buttons">' +
                  '<a class="pbtn" href="' + release.beatport + '" target="_blank" rel="noopener noreferrer" aria-label="Beatport" style="--pbtn-color:#00F5FF"><span>Beatport</span></a>' +
                  '<a class="pbtn" href="' + PLATFORM_LINKS.volumo + '" target="_blank" rel="noopener noreferrer" aria-label="Volumo" style="--pbtn-color:#a78bfa"><span>Volumo</span></a>' +
                  //'<a class="pbtn" href="' + PLATFORM_LINKS.spotify + '" target="_blank" rel="noopener noreferrer" aria-label="Spotify" style="--pbtn-color:#1db954"><span>Spotify</span></a>' +
                "</div>" +
              "</div>" +
            "</div>";
      });
      html += "</div></section>";
    });
    rosterEl.innerHTML = html;

    // 3D tilt on release covers (mouse only)
    var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (fine) {
      rosterEl.querySelectorAll(".cover-tilt").forEach(function (tilt) {
        var wrap = tilt.querySelector(".cover-wrap");
        tilt.addEventListener("mousemove", function (e) {
          var rect = tilt.getBoundingClientRect();
          var mx = (e.clientX - rect.left) / rect.width - 0.5;
          var my = (e.clientY - rect.top) / rect.height - 0.5;
          wrap.style.transform = "rotateX(" + (-my * 24) + "deg) rotateY(" + (mx * 24) + "deg)";
        });
        tilt.addEventListener("mouseleave", function () {
          wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
      });
    }
  }
})();
