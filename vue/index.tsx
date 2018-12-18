import Vue from 'vue'
import marked from 'marked'
import debounce from 'lodash.debounce'

const setupId = 'ae9a79d0-d93a-11e8-aebb-51df6010fd72'

Vue.config.ignoredElements = [
  'bearer-2627b8-slack-sharing-connect-action',
  'bearer-2627b8-slack-sharing-channel-action',
  'bearer-2627b8-slack-sharing-feature-action'
  // 'bearer-6d29c4-share-slack-beta-4-connect-action',
  // 'bearer-6d29c4-share-slack-beta-4-channel-action',
  // 'bearer-6d29c4-share-slack-beta-4-feature-action'
]

new Vue({
  el: '#test',
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value
    }, 300)
  }
})

new Vue({
  el: '#root',
  data: {
    setupId: setupId
  },
  mounted() {
    let vue = this.$refs.vue
    // v-on:bearer-6d29c4-share-slack-beta-4-channel-test="saveChannel"
    // v-on:bearer-6d29c4-share-slack-beta-4-channel-channelSaved="saveChannel"
    vue.addEventListener('bearer|2627b8-slack-sharing|channel|saved', e => {
      const {
        detail: { channelId }
      } = e
      console.log('[BEARER]', 'You must keep this reference ', channelId)
    })
  },
  methods: {
    saveChannel: function(event) {
      // `this` inside methods points to the Vue instance
      alert('Hello!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
