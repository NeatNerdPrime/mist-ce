define('app/models/key', ['ember'],
    /**
     *  Key Model
     *
     *  @returns Class
     */
    function() {
        return Ember.Object.extend({

            /**
             *  Properties
             */

            id: null,
            probing: null,
            machines: null,
            selected: null,
            isDefault: null,


            /**
             * 
             *  Methods
             * 
             */

            associate: function(machine, callback) {
                Mist.keysController.associateKey(this.id, machine, callback);
            },

            disassociate: function(machine, callback) {
                Mist.keysController.disassociateKey(this.id, machine, callback);
            },

        });
    }
);
