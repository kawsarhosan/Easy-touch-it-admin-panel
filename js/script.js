$('#smarttab').smartTab({

  // Selected Tab, 0 = first tab
  selected: 0,  

  // Theme
  theme: 'default',

  // Or 'vertical'
  orientation: 'horizontal',

  // Justified layout for tabs
  justified: true,

  // Auto adjust content height
  autoAdjustHeight: true,

  // Supports for Back button
  backButtonSupport: true,
  
  // Enables URL hash
  enableURLhash: true,
    
  // Configs animations here
  transition: {

    // none, fade, slide-horizontal, slide-vertical, slide-swing
    animation: 'none',

    // transition speed
    speed: '400',

    // easing function
    easing: ''

  },

  // Auto switches between tabs
  autoProgress: {
    
    // enable
    enabled: false,
    
    // interval in ms
    interval: 3500,

    // stop on focus
    stopOnFocus: true

  },

  // Keyboard navigation
  keyboardSettings: {

    // enable
    keyNavigation: true,

    // keycodes
    keyLeft: [37],
    keyRight: [39]

  }

});