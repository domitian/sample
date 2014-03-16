client = YAML.load_file("#{Rails.root}/config/google_oauth2.yml")[Rails.env]

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, client['id'], client['secret']
	      {
	      :name => "google",
	      :scope => "userinfo.email, userinfo.profile, plus.me",
	      :prompt => "select_account",
	      :hd => "elitmus.com"
	    }
	    
end

OmniAuth.config.on_failure = Proc.new do |env|
  OmniAuth::FailureEndpoint.new(env).redirect_to_failure
end