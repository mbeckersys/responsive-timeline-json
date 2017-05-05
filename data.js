// JSON object feeding Martin's timeline generator
var data = [
	{
		date: '2017-05-22',
        time: '09:30-10:15',
        title: 'Opening Remarks',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Organizers and Prof. Sanjoy Mitter"
		}]
	},
    {
		date: '2017-05-22',
        time: '10:15-11:00',
        title: 'Invariance Feedback Entropy for Uncertain Control Systems',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Matthias Rungger (Hybrid Control Systems Group, TUM)"
		},
		{
			tag: 'p',
			content: 'We introduce a novel notion of invariance feedback entropy to quantify the state information that is required by any controller that enforces a given subset of the state space to be invariant. We establish a number of elementary properties, e.g. we provide conditions that ensure that the invariance feedback entropy is finite and show that for the deterministic case, we recover the well-known notion of entropy for deterministic control systems. We prove the data rate theorem, which shows that the invariance entropy is a tight lower bound of the data rate of any coder-controller that achieves invariance in the closed loop. We analyze uncertain linear control systems and derive a universal lower bound of the invariance feedback entropy. The lower bound depends on the absolute value of the determinant of the system matrix and a ratio involving the volume of the invariant set and the set of uncertainties.'
		}]
	},
    {
		date: '2017-05-22',
        time: '11:00-11:45',
        title: 'Practical Realization of Control under Minimal Data Rate Requirements',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Christoph Kawan (Chair of Dynamical Systems, University of Passau)"
		},
		{
			tag: 'p',
			content: 'In recent years, nonlinear control and estimation over digital communication channels has been a very active research topic. In this context, various relations between the associated minimal channel capacities and dynamical quantities such as entropy and Lyapunov exponents have been discovered. Turning these mostly theoretical results into a useful tool for engineers is a challenging task. In this talk, some of the problems arising here and possible solutions will be discussed.'
		}]
	},
    {
		date: '2017-05-22',
        time: '11:45-12:30',
        title: 'Lunch',
		body: []
	},

    {
		date: '2017-05-22',
        time: '12:30-13:15',
        title: 'On Measure Theoretic Invariance Entropy',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Fritz Colonius (Chair of Control theory, University of Augsburg)"
		},
		{
			tag: 'p',
			content: 'Topological versions of invariance entropy and associated data rate theorems are now well established. Motivated by constructions in ergodic theory of dynamical systems, a measure theoretic version based on quasi-stationary measures is proposed which relaxes the invariance requirement.'
		}]
	},

    {
		date: '2017-05-22',
        time: '13:15-14:00',
        title: 'Generalized Kullback-Leibler Aggregation of Markov Chains',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Bernhard Geiger and Rana Ali Amjad (Chair for Communications Engineering, TUM)"
		},
		{
			tag: 'p',
			content: 'The Markov aggregation problem considers approximating a Markov chain with a large alphabet by a Markov chain with a small alphabet, such that the latter preserves relevant aspects of the former while significantly reducing model complexity. Recently, information-theoretic cost functions have been proposed for the Markov aggregation problem, and they have been shown to be connected to predictability, spectral clustering, lumpability, and the information bottleneck method. In this talk, we develop an information-theoretic cost function from first principles and show that it includes previously proposed cost functions as special cases. We furthermore propose a simple optimization heuristic and illustrate its performance on examples from natural language processing and data clustering.'
		}]
	},

    {
		date: '2017-05-22',
        time: '14:00-14:45',
        title: 'TBA',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Sandra Hirche’s group"
		},
		{
			tag: 'p',
			content: 'TBA'
		}]
	},

    {
		date: '2017-05-22',
        time: '14:45-15:15',
        title: 'Coffee',
		body: []
	},

    {
		date: '2017-05-22',
        time: '15:15-16:00',
        title: 'Cyber Physical Networking (CPN): Joint consideration of Control and Networking',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Wolfgang Kellerer (Chair of Communication Networks, TUM)"
		},
		{
			tag: 'p',
			content: 'Control over shared communication networks is a key challenge in design and analysis of cyber-physical systems. The quality of control in such systems might be degraded due to the congestion while accessing the scarce communication resources. With Cyber Physical Networking, we address the joint consideration of control and networking concepts to improve the system performance. In this presentation, we consider the example of a multiple-loop networked control system (NCS), where all control loops share a communication network. Medium Access Control (MAC) is performed based on information about the control system. We show our initial results of how such joint consideration can achieve a significant improvement in system performance for Cyber Physical Networking.'
		}]
	},

    {
		date: '2017-05-22',
        time: '16:00-16:45',
        title: 'Reference Trajectory Estimation for Vehicle-Control based on Online Machine Learning',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Michael Botsch (Technische Hochschule Ingolstadt)"
		},
		{
			tag: 'p',
			content: 'The computation of a reference trajectory for vehicle control is a key task in autonomous driving. Due to the dynamic environment in a traffic scenario, the reference trajectory for the controllers must be computed by predicting the motion of all traffic participants. Various algorithms exist aiming to solve this task: sampling algorithms like the RRT-algorithm, potential-field methods or even approaches based alone on machine learning. In this talk a hybrid method will be presented that uses machine learning for speeding up the RRT algorithm. Current research results will be shown as well as an approach that uses online machine learning for clustering the driver\'s motion planning in various traffic scenarios. These clusters can be used as a bias in sampling algorithms, leading to a significant reduction of the computation time, especially in complex scenarios with many dynamic traffic participants.'
		}]
	},

    {
		date: '2017-05-22',
        time: '16:45-17:30',
        title: 'Remote State Estimation in the Presence of an Eavesdropper',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Alex Leong (Chair of Automatic Control, University of Paderborn)"
		},
		{
			tag: 'p',
			content: 'In this talk we will consider a remote state estimation problem in the presence of an eavesdropper. A sensor transmits local state estimates over a packet dropping link to a remote estimator, while an eavesdropper can successfully overhear each sensor transmission with a certain probability. The objective is to determine when the sensor should transmit, in order to minimize the estimation error covariance at the remote estimator, while trying to keep the eavesdropper error covariance above a certain level. Structural results on the optimal transmission policy are derived, and shown to exhibit thresholding behaviour in the estimation error covariances. For unstable systems, it is shown that in the infinite horizon situation there exist transmission policies which can keep the expected estimation error covariance bounded, while the expected eavesdropper error covariance becomes unbounded. An alternative measure of security constraining the amount of information revealed to the eavesdropper will also be described. In the infinite horizon situation, it is now shown that for any transmission policy which keeps the expected estimation error covariance bounded, the expected amount of information revealed to the eavesdropper is always lower bounded away from zero.'
		}]
	},

    {
		date: '2017-05-22',
        time: '18:30',
        title: 'Dinner',
		body: []
	},



    {
		date: '2017-05-23',
        time: '09:30-10:15',
        title: 'On the Potential of Event-based Sampling for Control with Limited Data Rate',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Steffen Linsenmayer (Institute for Systems Theory and Automatic Control, University of Stuttgart)"
		},
		{
			tag: 'p',
			content: 'Recently, the potential of event-based sampling concepts for reducing the necessary data rate to stabilize unstable scalar control systems has been explored. This talk will focus on those sampling concepts and in particular on the robustness with respect to transmission delays in a Networked Control System. Starting out from those results, the concepts, the different effects of time delay and time uncertainty, and the particularities of scalar systems will be discussed.'
		}]
	},


    {
		date: '2017-05-23',
        time: '10:15-11:00',
        title: 'Transmission Scheduling for Remote State Estimation and Control with an Energy Harvesting Sensor',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Daniel Quevedo (Chair of Automatic Control, University of Paderborn)"
		},
		{
			tag: 'p',
			content: 'This talk studies remote state estimation where a sensor equipped with energy harvesting capabilities observes a dynamical system and transmits local state estimates over a packet dropping channel to a remote estimator. The objective is to decide, at every discrete time instant, whether the sensor should transmit or not, in order to minimize the expected estimation error covariance at the remote estimator. Within this setup, we obtain structural results on the optimal scheduling and shed light into the role played by threshold policies. We then consider the problem of transmission scheduling and control with an energy harvesting sensor, which can be shown to be separable into a control problem and a transmission scheduling problem. The optimal controller is then given as the solution to a linear-quadratic-Gaussian-type problem, while the structural results for transmission scheduling in the remote state estimation setup discussed can be extended to this situation as well.'
		}]
	},


    {
		date: '2017-05-23',
        time: '11:00-11:45',
        title: 'TBA',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Gerhard Kramer (Chair of Communication Networks, TUM)"
		},
		{
			tag: 'p',
			content: 'TBA'
		}]
	},


    {
		date: '2017-05-23',
        time: '11:45-12:30',
        title: 'Lunch',
		body: []
	},


    {
		date: '2017-05-23',
        time: '12:30-13:15',
        title: 'Design Trade-offs in Event-based Control',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Burak Demirel (Chair of Automatic Control, University of Paderborn)"
		},
		{
			tag: 'p',
			content: 'Due to the interconnectedness of smart technologies, the importance of decision making over communication networks grows bigger and bigger in our modern society. Closing feedback loops over networks introduces new challenges regarding how to use limited computation, communication, and energy resources efficiently. The traditional time-triggered control paradigm, unfortunately, is only based on performing sensing and actuation actions periodically in time rather than when the system needs attention. Therefore, event- and self-triggered algorithms have appeared as an alternative to time-triggered algorithms in both estimation and control to manage limited energy, communication, and computation resources while still ensuring closed-loop stability and performance. This talk will consider multiple linear stochastic control systems whose feedback loops are closed over a shared communication medium. A threshold-based event-triggering rule is used to transmit measurements from the sensors to the controllers, and network access is arbitrated using a static priority mechanism. Under these conditions, we study optimal control laws and compute the expected linear-quadratic loss of the closed-loop system as a function of the event thresholds of the individual loops. This talk will present analytical expressions that quantify the trade-off between the communication cost and the control performance of such event-triggered control systems. Simulation studies highlight the trade-off between the communication and control cost.'
		}]
	},


    {
		date: '2017-05-23',
        time: '13:15-14:00',
        title: 'TBA',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Wolfgang Utschick  (Chair of Signal Processing, TUM)"
		},
		{
			tag: 'p',
			content: 'TBA'
		}]
	},


    {
		date: '2017-05-23',
        time: '14:00-14:45',
        title: 'TBA',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Vahid Mamduhi (Chair of Information-oriented Control, TUM)"
		},
		{
			tag: 'p',
			content: 'TBA'
		}]
	},


    {
		date: '2017-05-23',
        time: '14:45-15:15',
        title: 'Coffee',
		body: []
	},

    {
		date: '2017-05-23',
        time: '15:15-16:00',
        title: 'Overview of Forward Error Correction Schemes for Short Blocklengths',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Fabian Steiner, Tobias Prinz, and Peihong Yuan (Chair for Communications Engineering, TUM)"
		},
		{
			tag: 'p',
			content: 'Ultra-reliable low-latency communication (uRRLC) requires forward error correction with small blocklengths, low error floors and efficient decoding algorithms. In this presentation, we provide an overview of possible coding schemes including both binary and non-binary low-density parity-check and Polar codes. We also highlight the benefits of tailbiting convolutional codes with wrap-around Viterbi decoding for very small blocklengths.'
		}]
	},

        {
		date: '2017-05-23',
        time: '16:00-16:45',
        title: 'TBA',
		body: [{
			tag: 'p',
            attr: [{'cssclass': 'speaker'}],
			content: "Touraj Soleymani (Chair of Information-oriented Control, TUM)"
		},
		{
			tag: 'p',
			content: 'TBA'
		}]
	},
];

$.fn.rcsTimeline.languages = {
	"es-ES": {
		days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
		months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		msgEmptyContent: "No hay información para mostrar."
	},
	"en-US": {
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		msgEmptyContent: "No information to display."
	},
	"fr-FR": {
		days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
		months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
		shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
		msgEmptyContent: "Aucune information à afficher."
	}
};

//Internationalization
$("#myTimeline").rcsTimeline(data, {
	language: "en-US",
	formatDate: 4,
    showMenu: true
});
