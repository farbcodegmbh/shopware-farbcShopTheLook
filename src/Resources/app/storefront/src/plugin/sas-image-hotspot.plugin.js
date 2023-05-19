import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class SasImageHotspotPlugin extends Plugin {
    init() {
        this._registerEvents();
    }

    _registerEvents() {
        const mediaId = this.el.getAttribute("data-media-id");
        const tooltip = new bootstrap.Tooltip(this.el)

        // show tooltip on mouseenter
        this.el.addEventListener("mouseenter", function (e) {
            bootstrap.Tooltip.getInstance(e.target).show()
        })

        // close all other tooltips
        this.el.addEventListener('show.bs.tooltip', (e) => {
            const tooltips = document.querySelectorAll('.stl-' + mediaId);
            tooltips.forEach((tooltip) => {
                if (tooltip !== e.target) bootstrap.Tooltip.getInstance(tooltip).hide();
            })
        })

        // attach mouseleave event to wrapper
        this.el.addEventListener('shown.bs.tooltip', (e) => {
            document.querySelector('.sas-image-hotspot-wrapper').addEventListener("mouseleave", function (e) {
                const tooltips = document.querySelectorAll('.sas-image-hotspot');
                tooltips.forEach((tooltip) => {
                    bootstrap.Tooltip.getInstance(tooltip).hide();
                })
            })
        })

        // open last element on first load
        if (this.el.nextElementSibling === null) tooltip.show();
    }
}
