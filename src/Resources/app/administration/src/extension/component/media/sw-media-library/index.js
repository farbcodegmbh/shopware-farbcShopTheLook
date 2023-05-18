const { Component, Context } = Shopware;
const { Criteria } = Shopware.Data;

/*Component.override('sw-media-library', {
    methods: {
        async loadItems() {
            this.isLoading = true;
            await this.nextFolders();

            if (this.folderLoaderDone) {
                this.pageItem += 1;

                const criteria = new Criteria(this.pageItem, this.limit);
                criteria
                    .addFilter(Criteria.equals('mediaFolderId', this.folderId))
                    .addAssociation('tags')
                    .addAssociation('productMedia.product')
                    .addAssociation('categories')
                    .addAssociation('productManufacturers.products')
                    .addAssociation('mailTemplateMedia.mailTemplate')
                    .addAssociation('documentBaseConfigs')
                    .addAssociation('avatarUser')
                    .addAssociation('paymentMethods')
                    .addAssociation('shippingMethods')
                    .addAssociation('hotspotMap')
                    .addSorting(Criteria.sort(this.sorting.sortBy, this.sorting.sortDirection))
                    .setTerm(this.term);

                const items = await this.mediaRepository.search(criteria, Context.api);

                this.items.push(...items);
                this.itemLoaderDone = this.isLoaderDone(criteria, items);
            }

            this.isLoading = false;
        },
    }
});
*/

/*async nextMedia() {
            if (this.itemLoaderDone) {
                return [];
            }

            // always search without folderId criteria --> search for all items
            let criteria = new Criteria(this.pageItem, this.limit);
            criteria
                .addSorting(Criteria.sort(this.sorting.sortBy, this.sorting.sortDirection))
                .setTerm(this.term);

            // ToDo NEXT-22186 - will be replaced by a new overview
            [
                'tags',
                'productMedia.product',
                'categories',
                'productManufacturers.products',
                'mailTemplateMedia.mailTemplate',
                'documentBaseConfigs',
                'avatarUsers',
                'paymentMethods',
                'shippingMethods',
                'cmsBlocks.section.page',
                'cmsSections.page',
                'cmsPages',
            ].forEach(association => {
                const associationParts = association.split('.');

                criteria.addAssociation(association);

                let path = null;
                associationParts.forEach(currentPart => {
                    path = path ? `${path}.${currentPart}` : currentPart;

                    criteria.getAssociation(path).setLimit(25);
                });
            });

            if (this.isValidTerm(this.term)) {
                const searchRankingFields = await this.searchRankingService.getSearchFieldsByEntity('media');

                if (!searchRankingFields || Object.keys(searchRankingFields).length < 1) {
                    this.isLoading = false;
                    this.itemLoaderDone = true;

                    return [];
                }

                criteria = this.searchRankingService.buildSearchQueriesForEntity(
                    searchRankingFields,
                    this.term,
                    criteria,
                );
            }

            // only fetch items of current folder
            if (!this.isValidTerm(this.term)) {
                criteria.addFilter(Criteria.equals('mediaFolderId', this.folderId));
            }

            // search only in current and all subFolders
            if (this.folderId != null && this.isValidTerm(this.term)) {
                criteria.addFilter(Criteria.multi('OR', [
                    Criteria.equals('mediaFolderId', this.folderId),
                    Criteria.contains('mediaFolder.path', this.folderId),
                ]));
            }

            const media = await this.mediaRepository.search(criteria, Context.api);

            this.itemLoaderDone = this.isLoaderDone(criteria, media);

            this.pageItem += 1;

            return media;
        },*/