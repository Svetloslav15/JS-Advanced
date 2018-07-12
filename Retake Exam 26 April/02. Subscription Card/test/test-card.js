describe('tests', function () {
    let SubscriptionCard;
    beforeEach(function () {
        SubscriptionCard = new card('Pesho', 'Petrov', '00000000');
    });
    it('1', function () {
        expect(SubscriptionCard.firstName).to.equals('Pesho');
        expect(SubscriptionCard.lastName).to.equals('Petrov');
        expect(SubscriptionCard.SSN).to.equals('00000000');
        expect(SubscriptionCard.isBlocked).to.equals(false);
        expect(SubscriptionCard._subscriptions).to.be.an('array');
    });

    it('2', function () {
        SubscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        SubscriptionCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        expect(SubscriptionCard._subscriptions).to.have.lengthOf(2)
    });

    it('3', function () {
        SubscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        SubscriptionCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        SubscriptionCard.block();
        expect(SubscriptionCard._blocked).to.equals(true)
    });
    it('4', function () {
        SubscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        SubscriptionCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        SubscriptionCard.block();
        SubscriptionCard.unblock();
        expect(SubscriptionCard._blocked).to.equals(false)
    });

    it('5', function () {
        SubscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));

        expect(SubscriptionCard.isValid('120', new Date('2018-04-22'))).to.equals(true);
        expect(SubscriptionCard.isValid('120', new Date('2018-04-21'))).to.equals(false);
        expect(SubscriptionCard.isValid('120', new Date('2018-05-21'))).to.equals(true);
        expect(SubscriptionCard.isValid('120', new Date('2018-05-22'))).to.equals(false);
        expect(SubscriptionCard.isValid('*', new Date('2018-05-11'))).to.equals(false);
    });

    it('6', function () {
        SubscriptionCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));

        expect(SubscriptionCard.isValid('1', new Date('2018-04-22'))).to.equals(true);
        expect(SubscriptionCard.isValid('*', new Date('2018-04-21'))).to.equals(false);
        expect(SubscriptionCard.isValid('2', new Date('2018-05-21'))).to.equals(true);
        expect(SubscriptionCard.isValid('*', new Date('2018-05-22'))).to.equals(false);
        expect(SubscriptionCard.isValid('*', new Date('2018-05-13'))).to.equals(true);
    })

    it('7', function () {
        SubscriptionCard.firstName = 'Asen';
        SubscriptionCard.lastName = 'Asenov';
        SubscriptionCard.SSN = '123123';

        expect(SubscriptionCard.firstName).to.equals('Pesho');
        expect(SubscriptionCard.lastName).to.equals('Petrov');
        expect(SubscriptionCard.SSN).to.equals('00000000');
    })
})