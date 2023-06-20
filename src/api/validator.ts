import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
    
  validations() {
    return {
      user: {
        email: {
           required, email 
        },
        password: {
            required, 
            min: minLength(6)
        },
      },
    }
  },
  
}