export interface ISettings {
  setupEmailNotifications: {
    emailNotifications: boolean
    sendCopyToPersonalEmail: boolean
  }
  activityRelatedEmail: {
    whenToEmail: {
      youHaveNewNotifications: boolean
      youAreADirectMessage: boolean
      someoneAddsYouAsAConnection: boolean
    }
    whenToEscalateEmails: {
      uponNewOrder: boolean
      newMembershipApproval: boolean
      memberRegistration: boolean
    }
  }
  updatesFromKeenthemes: {
    newsAboutArticles: boolean
    tipsOnGettingMore: boolean
    thingsYouMissed: boolean
    newsAboutPartners: boolean
  }
}

export const defaultSettings: ISettings = {
  setupEmailNotifications: {
    emailNotifications: true,
    sendCopyToPersonalEmail: false,
  },
  activityRelatedEmail: {
    whenToEmail: {
      youHaveNewNotifications: true,
      youAreADirectMessage: false,
      someoneAddsYouAsAConnection: false,
    },
    whenToEscalateEmails: {
      uponNewOrder: true,
      newMembershipApproval: false,
      memberRegistration: false,
    },
  },
  updatesFromKeenthemes: {
    newsAboutArticles: false,
    tipsOnGettingMore: false,
    thingsYouMissed: false,
    newsAboutPartners: false,
  },
}
