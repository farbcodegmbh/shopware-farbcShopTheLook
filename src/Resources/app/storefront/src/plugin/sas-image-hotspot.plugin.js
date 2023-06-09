import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class SasImageHotspotPlugin extends Plugin {
    init() {
        this._registerEvents();
    }

    _registerEvents() {

        // close all tooltips on click on image
        if (this.el.previousElementSibling.tagName === "IMG") {
            this.el.previousElementSibling.addEventListener("click", function (e) {
                const tooltips = document.querySelectorAll('.sas-image-hotspot');
                tooltips.forEach((tooltip) => {
                    bootstrap.Tooltip.getInstance(tooltip)?.hide();
                })
            })
        }

        const mediaId = this.el.getAttribute("data-media-id");
        const tooltip = new bootstrap.Tooltip(this.el)

        // show tooltip on mouseenter
        this.el.addEventListener("mouseenter", function (e) {
            const tooltip = bootstrap.Tooltip.getInstance(e.target)
            tooltip.show();
        })

        this.el.addEventListener("touchstart", function (e) {
            const tooltip = bootstrap.Tooltip.getInstance(e.target)
            tooltip.show();
        })

        // close all other tooltips
        this.el.addEventListener('show.bs.tooltip', (e) => {
            const tooltips = document.querySelectorAll('.stl-' + mediaId);
            tooltips.forEach((tooltip) => {
                if (tooltip !== e.target) {
                    bootstrap.Tooltip.getInstance(tooltip)?.hide();
                }
            })
        })

        // attach mouseleave event to wrapper
        this.el.addEventListener('shown.bs.tooltip', () => {
            document.querySelector('.sas-image-hotspot-wrapper').addEventListener("mouseleave", function (e) {
                bootstrap.Tooltip.getInstance(e.target)?.hide();
            })
        })

        // open last element on first load
        if (this.el.nextElementSibling === null) tooltip.show();
    }
}
