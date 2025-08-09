import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { MOCK_AGENCIES, MOCK_CAREERS, MOCK_TENDERS } from '../constants';

const HeroSection = () => (
    <section className="relative text-white py-20 md:py-32 bg-slate-800">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')"}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Explore the International Cooperation Ecosystem</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">Discover how multilateral agencies, international organizations, NGOs, and national entities contribute to global development.</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Link to="/careers/search" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block">Explore Careers &rarr;</Link>
                <Link to="/procurement/search" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105 inline-block">Explore Procurement &rarr;</Link>
                <Link to="/explore/knowledge-hub" className="border border-white/50 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors transform hover:scale-105 inline-block">Explore Knowledge &rarr;</Link>
            </div>
        </div>
    </section>
);

const FeatureCard = ({ iconName, title, children }: { iconName: string, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/50">
        <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-14 h-14 mb-4">
            <Icon name={iconName} className="w-8 h-8"/>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

const FeaturesSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard iconName="briefcase" title="Smart Career & Tender Tracker">
                    Efficiently manage your applications and proposals from a centralized dashboard.
                </FeatureCard>
                <FeatureCard iconName="clipboard" title="Access Mandates and Direct Links to Agencies">
                    Get direct access to agency profiles, mandates, and official career portals.
                </FeatureCard>
                <FeatureCard iconName="chart" title="Stay Informed with Sector Insights">
                    Analyze your application success rates and identify trends to optimize your strategy.
                </FeatureCard>
            </div>
        </div>
    </section>
);

const AgencyCard = ({ agency }: { agency: { type: string, name: string, mandate: string }}) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center h-full flex flex-col justify-between border hover:shadow-xl transition-shadow">
        <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">{agency.type}</span>
            <h3 className="text-2xl font-bold text-slate-700 mt-2">{agency.name}</h3>
            <p className="text-slate-500 mt-2">{agency.mandate}</p>
        </div>
        <a href="#" className="mt-6 text-blue-600 font-semibold hover:underline">Visit Site &rarr;</a>
    </div>
);


const AgenciesSection = () => (
    <section id="agencies" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800">Who’s part of this ecosystem?</h2>
                <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                    It includes a wide range of actors: United Nations agencies, international NGOs, development banks, bilateral and national cooperation bodies, and philanthropic foundations, all working towards global goals.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {MOCK_AGENCIES.map(agency => <AgencyCard key={agency.name} agency={agency} />)}
            </div>
        </div>
    </section>
);

const OpportunityCard = ({ item, type }: { item: any, type: 'career' | 'tender' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 hover:shadow-xl transition-shadow" style={{borderColor: type === 'career' ? '#3b82f6' : '#22c55e'}}>
        <span className={`text-xs font-bold uppercase ${type === 'career' ? 'text-blue-500' : 'text-green-500'}`}>{type}</span>
        <h3 className="text-lg font-bold text-slate-800 mt-1">{item.title}</h3>
        <p className="text-md text-slate-600">{type === 'career' ? item.organization : item.agency}</p>
        <div className="text-sm text-slate-500 mt-3">
            <p>📍 {item.country}</p>
            <p>⏳ Deadline: {item.deadline}</p>
        </div>
        <Link to={type === 'career' ? '/careers' : '/procurement'} className="mt-4 inline-block bg-slate-700 text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-slate-800 transition-colors">View</Link>
    </div>
);

const LatestOpportunitiesSection = () => (
    <section id="opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800">Latest Opportunities</h2>
            <p className="text-lg text-center text-slate-600 mt-2 max-w-2xl mx-auto">A glimpse of the careers and tenders available.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <OpportunityCard item={MOCK_CAREERS[0]} type="career" />
                <OpportunityCard item={MOCK_TENDERS[0]} type="tender" />
                <OpportunityCard item={MOCK_CAREERS[1]} type="career" />
                <OpportunityCard item={MOCK_TENDERS[1]} type="tender" />
            </div>
        </div>
    </section>
);

const JoinCTASection = () => (
    <section className="bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">Join the JPTracker community today</h2>
            <div className="mt-6">
                <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105 inline-block">
                    Start Now
                </Link>
            </div>
        </div>
    </section>
);

export const LandingFooter = () => (
    <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-white">JPTracker</h3>
                    <p className="text-sm mt-2">Your gateway to multilateral opportunities.</p>
                </div>
                <div>
                    <h3 className="font-bold text-white">Company</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-white">Legal</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-white">Connect</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} JPTracker. All rights reserved.
            </div>
        </div>
    </footer>
);

const LandingPage = () => (
    <>
        <HeroSection />
        <FeaturesSection />
        <AgenciesSection />
        <LatestOpportunitiesSection />
        <JoinCTASection />
    </>
);

export default LandingPage;