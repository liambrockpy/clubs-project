import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface S_CardProps {
	title: string
	description: string
	content: string
	footer: string
}

const S_Card = ({ title, description, content, footer }: S_CardProps) => {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<p>{content}</p>
				</CardContent>
				<CardFooter>
					<p>{footer}</p>
				</CardFooter>
			</Card>
		</div>
	)
}

export default S_Card
