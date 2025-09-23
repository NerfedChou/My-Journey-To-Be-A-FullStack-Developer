const descriptions = {
    'hardware-chip-outline': '<ul>\n' +
        '                    <li class = "spec-items">\n' +
        '                        <ion-icon class = "spec-symbol" name="hardware-chip-outline"></ion-icon>\n' +
        '                        <p class = "mark-up">A18 chip</p>\n' +
        '                    </li>\n' +
        '                    <li class = "spec-items">\n' +
        '                        <p>New 6‑core CPU with 2 performance and 4 efficiency cores</p>\n' +
        '                    </li>\n' +
        '                    <li class="spec-items">\n' +
        '                        <p>New 5‑core GPU</p>\n' +
        '                    </li>\n' +
        '                    <li class="spec-items">\n' +
        '                        <p>New 16‑core Neural Engine</p>\n' +
        '                    </li>\n' +
        '                    <li class="spec-items">\n' +
        '                        <p>CPU Performance:\n' +
        '                            The 6-core CPU provides a performance boost over the previous generation, while also improving power efficiency.\n' +
        '                        </p>\n' +
        '                    </li>\n' +
        '                    <li class="spec-items">\n' +
        '                        <p>GPU Performance:\n' +
        '                            The 5-core GPU delivers enhanced graphics performance, making it ideal for gaming and graphic-intensive applications.\n' +
        '                        </p>\n' +
        '                    </li>\n' +
        '                    <li class="spec-items">\n' +
        '                        <p>Neural Engine:\n' +
        '                            The 16-core Neural Engine accelerates machine learning tasks, enabling advanced features like real-time image processing and augmented reality.\n' +
        '                        </p>\n' +
        '                    </li>\n' +
        '                </ul>',
    'camera-outline': `<ul>
        <li class="spec-items">
            <ion-icon class="spec-symbol" name="camera-outline"></ion-icon>
            <p class="mark-up">Advanced Camera System</p>
        </li>
        <li class="spec-items">
            <p>48MP Main Sensor for ultra-high resolution photos</p>
        </li>
        <li class="spec-items">
            <p>Improved Night Mode for low-light photography</p>
        </li>
        <li class="spec-items">
            <p>Optical Zoom up to 5x</p>
        </li>
        <li class="spec-items">
            <p>Photonic Engine:
                Enhanced image processing for richer colors and details.
            </p>
        </li>
        <li class="spec-items">
            <p>ProRAW and ProRes support:
                Professional-grade photo and video formats.
            </p>
        </li>
        <li class="spec-items">
            <p>Smart HDR 5:
                Better dynamic range and contrast in every shot.
            </p>
        </li>
    </ul>`,
    'videocam-outline': `<ul>
        <li class="spec-items">
            <ion-icon class="spec-symbol" name="videocam-outline"></ion-icon>
            <p class="mark-up">4K Video Recording</p>
        </li>
        <li class="spec-items">
            <p>Record stunning 4K video at up to 60 fps</p>
        </li>
        <li class="spec-items">
            <p>Support for Dolby Vision HDR</p>
        </li>
        <li class="spec-items">
            <p>Advanced stabilization for smooth footage</p>
        </li>
        <li class="spec-items">
            <p>ProRes video recording for professional workflows</p>
        </li>
        <li class="spec-items">
            <p>Action mode for ultra-steady shots</p>
        </li>
        <li class="spec-items">
            <p>Enhanced low-light video performance</p>
        </li>
    </ul>`,
    'battery-full-outline': `<ul>
        <li class="spec-items">
            <ion-icon class="spec-symbol" name="battery-full-outline"></ion-icon>
            <p class="mark-up">High-Capacity Battery</p>
        </li>
        <li class="spec-items">
            <p>10000 mAh for all-day usage</p>
        </li>
        <li class="spec-items">
            <p>Up to 30 hours of video playback</p>
        </li>
        <li class="spec-items">
            <p>Optimized battery health management</p>
        </li>
        <li class="spec-items">
            <p>Supports fast charging and wireless charging</p>
        </li>
        <li class="spec-items">
            <p>Low Power Mode for extended battery life</p>
        </li>
    </ul>`,
    'battery-charging-outline': `<ul>
        <li class="spec-items">
            <ion-icon class="spec-symbol" name="battery-charging-outline"></ion-icon>
            <p class="mark-up">Fast Charging</p>
        </li>
        <li class="spec-items">
            <p>Supports up to 50W fast charging</p>
        </li>
        <li class="spec-items">
            <p>Charge up to 50% in just 30 minutes</p>
        </li>
        <li class="spec-items">
            <p>Compatible with USB-C Power Delivery</p>
        </li>
        <li class="spec-items">
            <p>Safe charging with advanced thermal management</p>
        </li>
        <li class="spec-items">
            <p>Wireless fast charging supported</p>
        </li>
    </ul>`,
    'wifi-outline': `<ul class>
        <li class="spec-items">
            <ion-icon class="spec-symbol" name="wifi-outline"></ion-icon>
            <p class="mark-up">5G Network</p>
        </li>
        <li class="spec-items">
            <p>Supports ultra-fast 5G connectivity</p>
        </li>
        <li class="spec-items">
            <p>Wi-Fi 6E for high-speed wireless performance</p>
        </li>
        <li class="spec-items">
            <p>Dual SIM (nano-SIM and eSIM) support</p>
        </li>
        <li class="spec-items">
            <p>Advanced antenna design for better coverage</p>
        </li>
        <li class="spec-items">
            <p>Seamless global roaming capabilities</p>
        </li>
    </ul>`
};

const mainDesc = document.querySelector('.main-descriptions');

function showDescription(html) {
    mainDesc.classList.add('fade-out');
    setTimeout(() => {
        mainDesc.innerHTML = html;
        mainDesc.classList.remove('fade-out');
        mainDesc.classList.add('fade-in', 'active');
    }, 300);
}

document.querySelectorAll('.spec-items').forEach(item => {
    item.addEventListener('click', e => {
        const icon = item.querySelector('.spec-symbol');
        const name = icon.getAttribute('name');
        showDescription(descriptions[name] || '');
        e.stopPropagation();
    });
});

document.addEventListener('mousedown', e => {
    if (!mainDesc.contains(e.target)) {
        mainDesc.classList.remove('active', 'fade-in');
        mainDesc.classList.add('inactive');
    }
});
