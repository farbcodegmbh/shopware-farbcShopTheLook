import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class SasImageHotspotPlugin extends Plugin {
    init() {
        this._registerEvents();
    }

    _registerEvents() {
        console.log("register")

        const mediaId = this.el.getAttribute("data-media-id");
        const tooltip = new bootstrap.Tooltip(this.el)

        // show tooltip on mouseenter
        this.el.addEventListener("mouseenter", function (e) {
            console.log("mouseenter")
            // todo remove flickering: if (tooltip && tooltip.tip && !tooltip.tip.classList.contains('show'))
            const tooltip = bootstrap.Tooltip.getInstance(e.target)
            tooltip.show();
        })

        this.el.addEventListener("touchstart", function (e) {
            console.log("touchstart")
            const tooltip = bootstrap.Tooltip.getInstance(e.target)
            tooltip.show();
        })

        // close all other tooltips
        this.el.addEventListener('show.bs.tooltip', (e) => {
            console.log("show.bs.tooltip")
            const tooltips = document.querySelectorAll('.stl-' + mediaId);
            tooltips.forEach((tooltip) => {
                if (tooltip !== e.target) bootstrap.Tooltip.getInstance(tooltip)?.hide();
            })
        })

        // attach mouseleave event to wrapper
        this.el.addEventListener('shown.bs.tooltip', (e) => {
            console.log("shown.bs.tooltip")
            document.querySelector('.sas-image-hotspot-wrapper').addEventListener("mouseleave", function (e) {
                const tooltips = document.querySelectorAll('.sas-image-hotspot');
                tooltips.forEach((tooltip) => {
                    bootstrap.Tooltip.getInstance(tooltip)?.hide();
                })
            })
        })

        // open last element on first load
        if (this.el.nextElementSibling === null) tooltip.show();
    }
}
