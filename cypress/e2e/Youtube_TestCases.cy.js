describe("Youtube Testing Suite", () => {
    beforeEach("Load Youtube", () => {

        cy.visit("https://www.youtube.com/");
        cy.title().should('eq', "YouTube");

    })

    it("TC_001 Search cypress courses and play that ", () => {

        cy.get("input[name='search_query']").type("cypress");
        cy.get(".ytSuggestionComponentLeftContainer:first()").should('be.visible').click();
        cy.get("h3[title='Cypress - JavaScript End to End Testing(2022 Series)']>a").should('be.visible').click()
        cy.title().should('eql', "Part 1: Cypress E2E Web Automation | Introduction | 2022 Series - YouTube")

    })

    it("TC_002 Count the number of thumbnails loaded ", () => {

        cy.get(".style-scope ytd-rich-item-renderer").should('be.visible')
            .and('have.length', 47)
    })

    it("TC_003 Load Shorts and validate that video played", () => {

        cy.get("a[aria-label='Shorts']").click()
        const interval = setInterval(() => {
            const video = document.querySelector('video');

            if (video) {
                console.log('Video found');

                video.addEventListener('play', () => console.log('Playing'));
                video.addEventListener('pause', () => console.log('Paused'));

                clearInterval(interval);
            }
        }, 1000);

    })


})