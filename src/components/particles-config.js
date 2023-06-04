const particlesConfig = {
    particles: {
        number: {
            value: 96,
            density: {
                enable: false,
                value_area: 881.8766334760375
            }
        },
        color: {
            value: "#7f0d0d"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 7
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.3928359549120531,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: false,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 192.40944730386272,
            color: "#7f0d0d",
            opacity: 0.2805971106514665,
            width: 1.2827296486924182
        },
        move: {
            enable: true,
            speed: 3.206824121731046,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 170.53621458328246,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 81.20772123013451,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}
export default particlesConfig