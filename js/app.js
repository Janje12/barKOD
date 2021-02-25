particlesJS('particles-js', {
    'particles': {
        'number': {'value': 80, 'density': {'enable': true, 'value_area': 800}},
        'color': {'value': '#ffffff'},
        'shape': {
            'type': 'circle',
            'stroke': {'width': 0, 'color': '#000000'},
            'polygon': {'nb_sides': 5},
            'image': {'src': 'img/github.svg', 'width': 100, 'height': 100}
        },
        'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}
        },
        'size': {
            'value': 3,
            'random': true,
            'anim': {'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false}
        },
        'line_linked': {'enable': true, 'distance': 150, 'color': '#ffffff', 'opacity': 0.4, 'width': 1},
        'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200}
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {'enable': true, 'mode': 'repulse'},
            'onclick': {'enable': true, 'mode': 'push'},
            'resize': true
        },
        'modes': {
            'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
            'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3},
            'repulse': {'distance': 200, 'duration': 0.4},
            'push': {'particles_nb': 4},
            'remove': {'particles_nb': 2}
        }
    },
    'retina_detect': true
});
const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(329, 77%, 42% 1);">${letter}</span>`;
const flickerAndColorText = text =>
    text
        .split('')
        .map(flickerLetter)
        .map(colorLetter)
        .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({target}) => neonGlory(target);
